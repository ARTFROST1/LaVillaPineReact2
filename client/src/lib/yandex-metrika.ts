/**
 * Yandex Metrika Integration Utilities
 * 
 * Утилиты для работы с Яндекс Метрикой:
 * - Отслеживание целей (reachGoal)
 * - Получение ClientID для офлайн-конверсий
 * - Отправка параметров визитов
 * 
 * Счётчик: 103308092
 */

// ID счётчика Яндекс Метрики
export const YM_COUNTER_ID = 103308092;

// Типы для Яндекс Метрики
declare global {
  interface Window {
    ym?: (
      counterId: number,
      method: string,
      ...args: unknown[]
    ) => void;
  }
}

/**
 * Идентификаторы целей для Яндекс Директ
 * 
 * Оптимизированные цели (4 основных):
 * 1. booking_complete - Главная цель: завершённое бронирование (webhook от RealtyCalendar)
 * 2. contact_form_submit - Отправка формы связи
 * 3. phone_click - Клик по номеру телефона
 * 4. messenger_click - Клик по мессенджеру (WhatsApp/Telegram)
 * 
 * ВАЖНО: Эти идентификаторы нужно создать в Яндекс Метрике как "JavaScript-событие"
 */
export const GOALS = {
  // Главная цель - бронирование (передаётся через webhook/офлайн-конверсии)
  BOOKING_COMPLETE: 'booking_complete',
  
  // Высокий приоритет - заявка через форму
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  
  // Средний приоритет - контактные действия
  PHONE_CLICK: 'phone_click',
  MESSENGER_CLICK: 'messenger_click', // Объединяет WhatsApp и Telegram
  
  // Дополнительные цели для аналитики (не для Директа)
  BOOKING_WIDGET_OPEN: 'booking_widget_open',
  GALLERY_VIEW: 'gallery_view',
} as const;

export type GoalId = typeof GOALS[keyof typeof GOALS];

/**
 * Отправка цели в Яндекс Метрику
 * 
 * @param goalId - Идентификатор цели
 * @param params - Дополнительные параметры цели
 * @param revenue - Доход по цели (для ecommerce)
 * @param currency - Валюта дохода (RUB по умолчанию)
 * 
 * @example
 * // Простой вызов
 * reachGoal(GOALS.CONTACT_FORM_SUBMIT);
 * 
 * // С параметрами
 * reachGoal(GOALS.PHONE_CLICK, { source: 'header' });
 * 
 * // С доходом
 * reachGoal(GOALS.BOOKING_COMPLETE, { bookingId: '123' }, 15000, 'RUB');
 */
export function reachGoal(
  goalId: GoalId | string,
  params?: Record<string, unknown>,
  revenue?: number,
  currency: string = 'RUB',
  onDone?: () => void
): void {
  if (typeof window === 'undefined' || !window.ym) {
    console.warn('[YM] Метрика не загружена, цель не отправлена:', goalId);
    onDone?.();
    return;
  }

  try {
    const goalParams: Record<string, unknown> = {
      ...params,
    };

    // Добавляем доход, если указан
    if (revenue !== undefined && revenue > 0) {
      goalParams.order_price = revenue;
      goalParams.currency = currency;
    }

    const hasParams = Object.keys(goalParams).length > 0;

    // Если нужен callback (например, перед переходом по ссылке)
    if (onDone) {
      let called = false;
      const doneOnce = () => {
        if (called) return;
        called = true;
        onDone();
      };

      const timeoutId = window.setTimeout(doneOnce, 700);
      const callback = () => {
        window.clearTimeout(timeoutId);
        doneOnce();
      };

      if (hasParams) {
        window.ym(YM_COUNTER_ID, 'reachGoal', goalId, goalParams, callback);
      } else {
        window.ym(YM_COUNTER_ID, 'reachGoal', goalId, callback);
      }
    } else {
      // Обычная отправка
      if (hasParams) {
        window.ym(YM_COUNTER_ID, 'reachGoal', goalId, goalParams);
      } else {
        window.ym(YM_COUNTER_ID, 'reachGoal', goalId);
      }
    }

    console.log('[YM] Цель отправлена:', goalId, goalParams);
  } catch (error) {
    console.error('[YM] Ошибка отправки цели:', error);
    onDone?.();
  }
}

/**
 * Получение ClientID посетителя
 * Используется для офлайн-конверсий при бронировании
 * 
 * @returns Promise<string | null> - ClientID или null
 * 
 * @example
 * const clientId = await getClientID();
 * if (clientId) {
 *   // Сохраняем clientId для отправки с бронированием
 * }
 */
export function getClientID(): Promise<string | null> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.ym) {
      console.warn('[YM] Метрика не загружена');
      resolve(null);
      return;
    }

    try {
      let done = false;
      const finish = (value: string | null) => {
        if (done) return;
        done = true;
        resolve(value);
      };

      const timeoutId = window.setTimeout(() => finish(null), 3000);

      window.ym(YM_COUNTER_ID, 'getClientID', (clientID: string) => {
        window.clearTimeout(timeoutId);
        console.log('[YM] ClientID получен:', clientID);
        finish(clientID);
      });
    } catch (error) {
      console.error('[YM] Ошибка получения ClientID:', error);
      resolve(null);
    }
  });
}

/**
 * Получение yclid из URL (для рекламных переходов из Директа)
 * 
 * @returns string | null - yclid или null
 */
export function getYclid(): string | null {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  const yclid = urlParams.get('yclid');
  
  if (yclid) {
    // Сохраняем в localStorage для последующего использования
    try {
      localStorage.setItem('ym_yclid', yclid);
      localStorage.setItem('ym_yclid_timestamp', Date.now().toString());
    } catch (e) {
      console.warn('[YM] Не удалось сохранить yclid в localStorage');
    }
  }
  
  return yclid;
}

/**
 * Получение сохранённого yclid
 * 
 * @param maxAge - Максимальный возраст в днях (по умолчанию 21 день - лимит Метрики)
 * @returns string | null
 */
export function getStoredYclid(maxAge: number = 21): string | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const yclid = localStorage.getItem('ym_yclid');
    const timestamp = localStorage.getItem('ym_yclid_timestamp');
    
    if (!yclid || !timestamp) return null;
    
    const age = (Date.now() - parseInt(timestamp, 10)) / (1000 * 60 * 60 * 24);
    
    if (age > maxAge) {
      // Удаляем устаревший yclid
      localStorage.removeItem('ym_yclid');
      localStorage.removeItem('ym_yclid_timestamp');
      return null;
    }
    
    return yclid;
  } catch (e) {
    return null;
  }
}

/**
 * Отправка параметров визита
 * 
 * @param params - Параметры визита
 */
export function sendParams(params: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !window.ym) {
    console.warn('[YM] Метрика не загружена');
    return;
  }

  try {
    window.ym(YM_COUNTER_ID, 'params', params);
    console.log('[YM] Параметры отправлены:', params);
  } catch (error) {
    console.error('[YM] Ошибка отправки параметров:', error);
  }
}

/**
 * Инициализация отслеживания yclid при загрузке страницы
 * Вызывается автоматически
 */
export function initYclidTracking(): void {
  if (typeof window === 'undefined') return;
  
  // Получаем и сохраняем yclid из URL
  const yclid = getYclid();
  
  if (yclid) {
    console.log('[YM] Обнаружен переход из Директа, yclid сохранён');
  }
}

// Автоматическая инициализация при импорте
if (typeof window !== 'undefined') {
  // Ждём загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initYclidTracking);
  } else {
    initYclidTracking();
  }
}

/**
 * Хелпер для отслеживания клика по телефону
 * @param source - Источник клика (header, footer, contacts, etc.)
 */
export function trackPhoneClick(source: string = 'unknown'): void {
  reachGoal(GOALS.PHONE_CLICK, { source });
}

export function trackPhoneClickWithCallback(
  source: string,
  onDone: () => void
): void {
  reachGoal(GOALS.PHONE_CLICK, { source }, undefined, 'RUB', onDone);
}

/**
 * Хелпер для отслеживания клика по мессенджеру
 * @param messenger - Тип мессенджера (whatsapp, telegram)
 * @param source - Источник клика
 */
export function trackMessengerClick(
  messenger: 'whatsapp' | 'telegram',
  source: string = 'unknown'
): void {
  reachGoal(GOALS.MESSENGER_CLICK, { messenger, source });
}

export function trackMessengerClickWithCallback(
  messenger: 'whatsapp' | 'telegram',
  source: string,
  onDone: () => void
): void {
  reachGoal(GOALS.MESSENGER_CLICK, { messenger, source }, undefined, 'RUB', onDone);
}

/**
 * Хелпер для отслеживания отправки формы
 */
export function trackContactFormSubmit(): void {
  reachGoal(GOALS.CONTACT_FORM_SUBMIT);
}

/**
 * Хелпер для отслеживания открытия виджета бронирования
 */
export function trackBookingWidgetOpen(): void {
  reachGoal(GOALS.BOOKING_WIDGET_OPEN);
}
