# Миграция проекта La Villa Pine из Replit в локальную среду разработки

## Требования к системе

### Необходимое программное обеспечение:
- **Node.js** версии 18 или выше
- **npm** (устанавливается вместе с Node.js)
- **Visual Studio Code** (или другой редактор)

## Пошаговая инструкция

### 1. Подготовка локальной среды

#### Установка Node.js:
```bash
# Проверьте версию Node.js
node --version

# Если Node.js не установлен, скачайте с https://nodejs.org/
# Рекомендуется версия 18 LTS или выше
```

### 2. Настройка проекта после скачивания

#### Предполагаем, что вы уже скачали архив проекта из Replit

#### Распакуйте и перейдите в директорию проекта:
```bash
# Распакуйте архив
tar -xzf la-villa-pine.tar.gz
# или если архив в zip формате:
# unzip la-villa-pine.zip

# Перейдите в папку проекта
cd la-villa-pine
```

#### Установите зависимости:
```bash
npm install
```

### 3. Настройка переменных окружения

#### Создайте файл `.env` в корне проекта:
```env
# Основные настройки
NODE_ENV=development
PORT=5000

# Email настройки (опционально, для формы обратной связи)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Telegram Bot (опционально, для уведомлений)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Yandex Maps API (для карты на странице контактов)
YANDEX_MAPS_API_KEY=your_yandex_maps_key
```

**Примечание:** Все настройки в .env файле опциональны. Проект будет работать и без них, но некоторые функции могут быть недоступны (отправка email, карта).

### 4. Настройка Visual Studio Code

#### Рекомендуемые расширения:
- **TypeScript and JavaScript Language Features** (обычно уже установлено)
- **ES7+ React/Redux/React-Native snippets** - для удобства работы с React
- **Tailwind CSS IntelliSense** - автодополнение для Tailwind CSS
- **Auto Rename Tag** - автоматическое переименование парных тегов
- **Prettier - Code formatter** - форматирование кода
- **ESLint** - проверка кода на ошибки

#### Создайте файл `.vscode/settings.json` в корне проекта:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```

### 5. Запуск проекта

#### Запустите в режиме разработки:
```bash
npm run dev
```

#### Откройте в браузере:
```
http://localhost:5000
```

**Поздравляю! Проект должен запуститься и работать точно так же, как в Replit.**

## Возможные проблемы и решения

### 1. Проблемы с портами
```bash
# Если порт 5000 занят, измените в package.json:
"dev": "NODE_ENV=development PORT=3000 tsx server/index.ts"
```

### 2. Проблемы с зависимостями
```bash
# Очистите кеш npm
npm cache clean --force

# Удалите node_modules и переустановите
rm -rf node_modules package-lock.json
npm install
```

### 3. Проблемы с TypeScript
```bash
# Глобальная установка TypeScript
npm install -g typescript

# Проверьте версию
tsc --version
```

### 4. Проблемы с запуском
```bash
# Если команда tsx не найдена, установите глобально:
npm install -g tsx

# Или используйте через npx:
npx tsx server/index.ts
```

## Структура проекта после миграции

```
la-villa-pine/
├── client/                 # Frontend React приложение
│   ├── src/
│   │   ├── components/     # React компоненты
│   │   ├── pages/          # Страницы приложения
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Утилиты и конфигурация
├── server/                 # Backend Express приложение
│   ├── routes.ts           # API маршруты
│   ├── storage.ts          # Работа с данными (в памяти)
│   └── index.ts            # Точка входа сервера
├── shared/                 # Общие типы и схемы
│   └── schema.ts           # Схемы данных
├── public/                 # Статические файлы (изображения)
├── .env                    # Переменные окружения (опционально)
├── package.json            # Зависимости проекта
├── tsconfig.json           # Конфигурация TypeScript
└── vite.config.ts          # Конфигурация Vite
```

## Дополнительные команды

### Разработка:
```bash
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшен версии
```

### Проверка кода:
```bash
npm run type-check   # Проверка TypeScript (если есть в package.json)
```

## Готово!

После выполнения всех шагов ваш проект La Villa Pine будет полностью работать в локальной среде разработки. Вы сможете:

- Редактировать код в Visual Studio Code
- Видеть изменения в реальном времени (hot reload)
- Работать с проектом полностью локально
- Развертывать проект на любом хостинге

**Важно:** Проект использует in-memory хранилище данных, поэтому база данных не требуется. Все данные хранятся в памяти во время работы приложения.

Если возникнут проблемы, проверьте логи в терминале и убедитесь, что все зависимости установлены правильно.