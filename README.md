# La Villa Pine - Luxury Guest House

Современное веб-приложение для элитного гостевого дома с саунами, подогреваемыми бассейнами и расположением в лесу.

## Технологии

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (опционально)
- **Build**: Vite, esbuild

## Быстрый старт

### Разработка
```bash
npm install
npm run dev
```

### Продакшн
```bash
npm run build
npm start
```

## Деплой на Render

1. Создайте репозиторий на GitHub
2. Загрузите все файлы проекта
3. Зайдите на [render.com](https://render.com)
4. Создайте новый Web Service
5. Подключите GitHub репозиторий
6. Render автоматически обнаружит настройки из `render.yaml`

### Переменные окружения
- `NODE_ENV=production` (обязательно)
- `EMAIL_USER` и `EMAIL_PASS` для SMTP
- `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` для уведомлений

## Функционал

- ✅ Адаптивный дизайн
- ✅ Карусель изображений
- ✅ Галерея с модальными окнами
- ✅ Контактная форма с уведомлениями
- ✅ Интеграция с HomeReserve для бронирования
- ✅ Интеграция с Яндекс.Картами
- ✅ Соцсети (Instagram, VK, WhatsApp, Telegram, Avito)

## Структура проекта

```
├── client/           # React frontend
├── server/           # Express backend
├── shared/           # Общие схемы и типы
├── public/           # Статические файлы
└── dist/            # Собранный проект
```

Подробная инструкция по деплою в файле `RENDER_DEPLOY_GUIDE.md`.