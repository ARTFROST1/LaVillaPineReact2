# Telegram Bot Troubleshooting Guide

## Проблема: Telegram бот работает в разработке, но не в продакшене на Render

### Возможные причины:

1. **Переменные окружения не настроены в Render**
   - Проверьте, что `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` добавлены в настройки Render
   - Зайдите в Dashboard → Your Service → Environment → Environment Variables

2. **Неверный формат Chat ID**
   - Chat ID должен быть числом: `123456789` или `-987654321`
   - Не должен содержать пробелы, буквы или символы

3. **Бот не запущен или заблокирован**
   - Отправьте `/start` вашему боту
   - Проверьте, что бот активен в @BotFather

### Пошаговая настройка:

#### 1. Создание бота:
```
1. Найдите @BotFather в Telegram
2. Отправьте /newbot
3. Выберите имя и username для бота
4. Получите токен (формат: 123456789:ABCDEF...)
```

#### 2. Получение Chat ID:
```
1. Найдите @userinfobot в Telegram
2. Отправьте /start
3. Получите ваш Chat ID (число)
```

#### 3. Настройка в Render:
```
1. Зайдите в Render Dashboard
2. Выберите ваш сервис
3. Environment → Environment Variables
4. Добавьте:
   - TELEGRAM_BOT_TOKEN: [токен от BotFather]
   - TELEGRAM_CHAT_ID: [ваш Chat ID]
```

#### 4. Тестирование:
```
1. Перезапустите деплой в Render
2. Отправьте тестовое сообщение через форму
3. Проверьте логи в Render
```

### Команды для тестирования:

#### Локальное тестирование:
```bash
node test-telegram.js
```

#### Проверка переменных окружения:
```bash
echo $TELEGRAM_BOT_TOKEN
echo $TELEGRAM_CHAT_ID
```

### Типичные ошибки:

1. **404 Not Found** - неверный токен бота
2. **400 Bad Request: chat not found** - неверный Chat ID
3. **403 Forbidden** - бот заблокирован пользователем
4. **Invalid token** - неверный формат токена

### Что делать если не работает:

1. Проверьте формат токена: `123456789:ABCDEF...`
2. Проверьте Chat ID: только цифры
3. Отправьте `/start` боту
4. Проверьте настройки в Render
5. Проверьте логи приложения

### Полезные команды для отладки:

```bash
# Проверка формата токена
echo $TELEGRAM_BOT_TOKEN | grep -E '^\d+:[A-Za-z0-9_-]+$'

# Проверка формата Chat ID  
echo $TELEGRAM_CHAT_ID | grep -E '^-?\d+$'

# Тест API напрямую
curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
  -H "Content-Type: application/json" \
  -d "{\"chat_id\":\"$TELEGRAM_CHAT_ID\",\"text\":\"Test message\"}"
```