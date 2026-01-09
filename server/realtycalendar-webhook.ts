/**
 * RealtyCalendar Webhook Handler
 * 
 * Обработчик вебхуков от системы бронирования RealtyCalendar (HomeReserve)
 * для отслеживания завершённых бронирований в Яндекс Метрике
 * 
 * Документация RealtyCalendar Webhook:
 * https://realtycalendar.helpdeskeddy.com/ru/knowledge_base/art/208/cat/25/opisanie-webhook
 * 
 * Для работы офлайн-конверсий необходимо:
 * 1. Создать цель "booking_complete" типа "JavaScript-событие" в Яндекс Метрике
 * 2. Включить "Учёт офлайн-конверсий" в настройках счётчика
 * 3. Получить OAuth-токен для API Метрики (опционально, для автозагрузки)
 */

// Идентификатор цели для бронирования
const BOOKING_GOAL_ID = 'booking_complete';

type OfflineIdType = 'ClientId' | 'yclid';

function toUnixSeconds(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

function parseUnixSeconds(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return Math.floor(value);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;

    // unix seconds (or unix ms)
    const asNumber = Number(trimmed);
    if (Number.isFinite(asNumber)) {
      const n = Math.floor(asNumber);
      // Heuristic: if it's in milliseconds, convert to seconds
      if (n > 2_000_000_000_000) return Math.floor(n / 1000);
      return n;
    }

    // ISO date
    const ms = Date.parse(trimmed);
    if (!Number.isNaN(ms)) return Math.floor(ms / 1000);
  }
  return null;
}

function firstStringField(
  obj: Record<string, unknown>,
  keys: string[]
): string | undefined {
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return undefined;
}

function normalizePhone(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed;
}

function normalizeEmail(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed;
}

function resolveEventUnixSeconds(payload: RealtyCalendarWebhook): number {
  const candidates: unknown[] = [
    payload.timestamp,
    payload.data?.created_at,
    payload.data?.updated_at,
  ];
  for (const candidate of candidates) {
    const parsed = parseUnixSeconds(candidate);
    if (parsed !== null) return parsed;
  }

  // Fallback: now (must not be future time for Metrika uploads)
  return toUnixSeconds(new Date()) - 1;
}

/**
 * Структура webhook от RealtyCalendar
 * Основные события:
 * - reservation_created - Новое бронирование
 * - reservation_updated - Обновление бронирования
 * - reservation_cancelled - Отмена бронирования
 * - payment_received - Получена оплата
 */
export interface RealtyCalendarWebhook {
  event: string;
  timestamp: string;
  data: {
    reservation_id?: string;
    booking_id?: string;
    id?: string;
    status?: string;
    guest_name?: string;
    guest_phone?: string;
    guest_email?: string;
    check_in?: string;
    check_out?: string;
    total_price?: number;
    currency?: string;
    property_id?: string;
    property_name?: string;
    source?: string;
    payment_status?: string;
    created_at?: string;
    updated_at?: string;
    // Дополнительные поля от RealtyCalendar
    [key: string]: unknown;
  };
}

/**
 * Лог бронирования для хранения
 */
export interface BookingLog {
  id: string;
  reservationId: string;
  event: string;
  eventUnixSeconds: number;
  clientId?: string;
  yclid?: string;
  guestPhone?: string;
  guestEmail?: string;
  totalPrice?: number;
  currency?: string;
  timestamp: Date;
  rawData: RealtyCalendarWebhook;
}

// In-memory storage для логов бронирований (в production использовать БД)
const bookingLogs: BookingLog[] = [];

/**
 * Обработка входящего webhook от RealtyCalendar
 */
export async function handleRealtyCalendarWebhook(
  payload: RealtyCalendarWebhook
): Promise<{ success: boolean; message: string; bookingId?: string }> {
  const { event, data, timestamp } = payload;

  const eventUnixSeconds = resolveEventUnixSeconds(payload);
  
  console.log(`[RealtyCalendar Webhook] Получено событие: ${event}`, {
    timestamp,
    reservationId: data.reservation_id || data.booking_id || data.id,
  });

  // Определяем ID бронирования
  const reservationId = data.reservation_id || data.booking_id || data.id || `unknown_${Date.now()}`;

  // Пытаемся извлечь идентификаторы для офлайн-конверсий (если система их передаёт)
  const clientId = firstStringField(data, [
    'clientId',
    'client_id',
    'metrika_client_id',
    'ym_client_id',
    'ymClientId',
    'yandex_client_id',
  ]);

  const yclid = firstStringField(data, [
    'yclid',
    'yandex_yclid',
    'ya_yclid',
  ]);

  // Сохраняем лог
  const log: BookingLog = {
    id: `log_${Date.now()}`,
    reservationId,
    event,
    eventUnixSeconds,
    clientId,
    yclid,
    guestPhone: normalizePhone(data.guest_phone),
    guestEmail: normalizeEmail(data.guest_email),
    totalPrice: data.total_price,
    currency: data.currency || 'RUB',
    timestamp: new Date(),
    rawData: payload,
  };
  bookingLogs.push(log);

  // Обрабатываем только события создания бронирования или получения оплаты
  // Это главная цель для Яндекс Директа
  if (event === 'reservation_created' || event === 'payment_received' || event === 'booking_created') {
    console.log(`[RealtyCalendar] Новое бронирование/оплата: ${reservationId}`, {
      guest: data.guest_name,
      price: data.total_price,
      dates: `${data.check_in} - ${data.check_out}`,
    });

    // Формируем данные для офлайн-конверсии
    const conversionData = {
      goalId: BOOKING_GOAL_ID,
      reservationId,
      dateTimeUnixSeconds: eventUnixSeconds,
      revenue: data.total_price,
      currency: data.currency || 'RUB',
      clientId,
      yclid,
      guestPhone: normalizePhone(data.guest_phone),
      guestEmail: normalizeEmail(data.guest_email),
    };

    // Логируем для ручной загрузки офлайн-конверсий
    logOfflineConversion(conversionData);

    return {
      success: true,
      message: `Бронирование ${reservationId} обработано для Яндекс Метрики`,
      bookingId: reservationId,
    };
  }

  // Отмена бронирования - можно использовать для аналитики
  if (event === 'reservation_cancelled') {
    console.log(`[RealtyCalendar] Бронирование отменено: ${reservationId}`);
    return {
      success: true,
      message: `Отмена бронирования ${reservationId} зафиксирована`,
      bookingId: reservationId,
    };
  }

  return {
    success: true,
    message: `Событие ${event} обработано`,
    bookingId: reservationId,
  };
}

/**
 * Логирование офлайн-конверсии
 * Данные можно загрузить в Яндекс Метрику через интерфейс или API
 */
interface OfflineConversionData {
  goalId: string;
  reservationId: string;
  dateTimeUnixSeconds: number;
  revenue?: number;
  currency?: string;
  clientId?: string;
  yclid?: string;
  guestPhone?: string;
  guestEmail?: string;
}

function logOfflineConversion(data: OfflineConversionData): void {
  // ВАЖНО: формат офлайн-конверсий Метрики (CSV) требует:
  // {ClientId|UserID|yclid|PurchaseId},Target,DateTime,Price,Currency
  // где DateTime — Unix time stamp (секунды), в прошедшем времени.
  const idType: OfflineIdType = data.yclid ? 'yclid' : 'ClientId';
  const idValue = data.yclid || data.clientId || '';

  const csvLine = [
    idValue,
    data.goalId,
    data.dateTimeUnixSeconds,
    data.revenue ?? '',
    data.currency || 'RUB',
  ].join(',');

  console.log(`[Offline Conversion] CSV (${idType}):`, `${idType},Target,DateTime,Price,Currency\n${csvLine}`);
  console.log('[Offline Conversion] Debug payload:', JSON.stringify(data, null, 2));
  
  // Сохраняем в файл для последующей загрузки (опционально)
  // В production можно отправлять напрямую через API Метрики
}

/**
 * Получение логов бронирований
 */
export function getBookingLogs(limit: number = 100): BookingLog[] {
  return bookingLogs.slice(-limit);
}

/**
 * Получение CSV для загрузки офлайн-конверсий
 */
export function generateOfflineConversionsCSV(): string {
  return generateOfflineConversionsCSVWithIdType('ClientId');
}

export function generateOfflineConversionsCSVWithIdType(idType: OfflineIdType): string {
  const header = `${idType},Target,DateTime,Price,Currency`;
  const rows = bookingLogs
    .filter(log => 
      log.event === 'reservation_created' || 
      log.event === 'payment_received' ||
      log.event === 'booking_created'
    )
    .map(log => {
      const idValue = idType === 'yclid' ? (log.yclid || '') : (log.clientId || '');
      return [
        idValue,
        BOOKING_GOAL_ID,
        log.eventUnixSeconds,
        log.totalPrice ?? '',
        log.currency || 'RUB',
      ].join(',');
    });

  return [header, ...rows].join('\n');
}

/**
 * Отправка офлайн-конверсии через API Яндекс Метрики
 * 
 * Требует OAuth-токен с правами на запись в счётчик
 * Документация: https://yandex.ru/dev/metrika/doc/api2/management/offline_conversion/upload.html
 * 
 * ПРИМЕЧАНИЕ: Для использования этой функции необходимо:
 * 1. Получить OAuth-токен в Яндекс OAuth
 * 2. Настроить переменную окружения YANDEX_METRIKA_OAUTH_TOKEN
 * 
 * Пока что рекомендуется использовать ручную загрузку через CSV:
 * GET /api/webhook/conversions/csv
 */
export async function sendOfflineConversionToMetrika(
  oauthToken: string,
  conversions: Array<{
    clientId?: string;
    yclid?: string;
    phone?: string;
    email?: string;
    target: string;
    dateTime: string;
    price?: number;
    currency?: string;
  }>
): Promise<{ success: boolean; message: string }> {
  if (!oauthToken) {
    console.warn('[Metrika API] OAuth-токен не предоставлен. Используйте /api/webhook/conversions/csv для ручной загрузки.');
    return { success: false, message: 'OAuth-токен не предоставлен. Используйте CSV экспорт.' };
  }

  // Логируем данные для отладки
  console.log('[Metrika API] Подготовлены конверсии для загрузки:', conversions.length);
  
  // В будущем здесь можно добавить автоматическую отправку через API
  // Сейчас рекомендуется использовать CSV экспорт: /api/webhook/conversions/csv
  
  return { 
    success: false, 
    message: 'Автоматическая загрузка временно отключена. Используйте /api/webhook/conversions/csv для ручной загрузки в Метрику.' 
  };
}

/**
 * Валидация подписи webhook (если RealtyCalendar поддерживает)
 */
export function validateWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  // RealtyCalendar может использовать HMAC-SHA256 для подписи
  // Если используется, раскомментируйте и настройте
  /*
  const crypto = require('crypto');
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return signature === expectedSignature;
  */
  
  // По умолчанию пропускаем валидацию
  return true;
}
