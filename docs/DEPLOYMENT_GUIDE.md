# Полное Руководство по Развертыванию La Villa Pine

## Обзор
Это руководство объединяет все инструкции по развертыванию проекта La Villa Pine на различных платформах.

## Развертывание на Render

### Подготовка
1. Создайте аккаунт на [Render.com](https://render.com)
2. Подключите GitHub репозиторий
3. Создайте новый Web Service

### Конфигурация
```yaml
# render.yaml
services:
  - type: web
    name: la-villa-pine
    env: node
    buildCommand: npm ci && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromService:
          type: pserv
          name: la-villa-pine-db
          property: connectionString
```

### Переменные Окружения
Добавьте в Render Dashboard:
- `TELEGRAM_BOT_TOKEN` - Токен бота от @BotFather
- `TELEGRAM_CHAT_ID` - ID чата для уведомлений
- `EMAIL_USER` - Email для SMTP (опционально)
- `EMAIL_PASS` - Пароль для SMTP (опционально)

### База Данных
1. Создайте PostgreSQL сервис в Render
2. Подключите к веб-сервису
3. Миграции запустятся автоматически

## Развертывание на Replit

### Replit Deploy
1. Откройте проект в Replit
2. Нажмите кнопку "Deploy"
3. Выберите тип развертывания
4. Добавьте секреты в Secrets tab

### Настройка Секретов
```
TELEGRAM_BOT_TOKEN=123456789:ABCDEF...
TELEGRAM_CHAT_ID=987654321
DATABASE_URL=postgresql://...
```

## Локальная Разработка

### Требования
- Node.js 18+
- npm или yarn
- PostgreSQL (опционально)

### Установка
```bash
git clone <repository>
cd la-villa-pine
npm install
cp .env.example .env  # Настройте переменные
npm run dev
```

### Структура
```
la-villa-pine/
├── client/              # Frontend React
├── server/              # Backend Express
├── shared/              # Общие схемы
├── public/              # Статические файлы
└── docs/               # Документация
```

## Устранение Неполадок

### Telegram Bot
**Проблема:** Сообщения не отправляются
**Решение:**
1. Проверьте формат токена: `123456789:ABCDEF...`
2. Проверьте Chat ID (число)
3. Отправьте `/start` боту
4. Проверьте, что бот добавлен в чат

### Изображения
**Проблема:** Изображения не загружаются на продакшене
**Решение:**
1. Убедитесь, что `copy-static.js` выполняется при сборке
2. Проверьте структуру папки `public/images/`
3. Используйте относительные пути

### SMTP Email
**Проблема:** Email не отправляется
**Решение:**
1. Проверьте настройки SMTP провайдера
2. Для Yandex: используйте порт 465 с SSL
3. Включите "Пароли приложений" в настройках

## Поддержка

Для получения помощи:
1. Проверьте логи в консоли
2. Используйте инструменты разработчика браузера
3. Проверьте статус внешних сервисов (Telegram API, SMTP)

## Обновления

При обновлении проекта:
1. Сделайте резервную копию базы данных
2. Обновите зависимости: `npm update`
3. Проверьте совместимость API
4. Протестируйте на staging окружении