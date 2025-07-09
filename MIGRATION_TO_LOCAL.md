# Миграция проекта La Villa Pine из Replit в локальную среду разработки

## Требования к системе

### Необходимое программное обеспечение:
- **Node.js** версии 18 или выше
- **npm** (устанавливается вместе с Node.js)
- **PostgreSQL** (локальная установка или удаленная БД)
- **Git** для работы с репозиторием
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

#### Установка PostgreSQL:
```bash
# Ubuntu/Debian:
sudo apt update
sudo apt install postgresql postgresql-contrib

# macOS (с Homebrew):
brew install postgresql

# Windows: скачайте с https://www.postgresql.org/download/windows/
```

### 2. Скачивание проекта

#### Из Replit:
1. В Replit откройте Shell и выполните:
```bash
# Создайте архив всего проекта
tar -czf la-villa-pine.tar.gz .

# Скачайте файл через веб-интерфейс Replit
```

2. Или используйте Git (если настроен):
```bash
git clone <your-replit-repo-url>
```

### 3. Настройка локального проекта

#### Распакуйте и перейдите в директорию:
```bash
tar -xzf la-villa-pine.tar.gz
cd la-villa-pine
```

#### Установите зависимости:
```bash
npm install
```

### 4. Настройка базы данных

#### Создайте базу данных PostgreSQL:
```bash
# Войдите в PostgreSQL
sudo -u postgres psql

# Создайте базу данных
CREATE DATABASE lavilla_pine;

# Создайте пользователя
CREATE USER lavilla_user WITH PASSWORD 'your_password';

# Дайте права пользователю
GRANT ALL PRIVILEGES ON DATABASE lavilla_pine TO lavilla_user;

# Выйдите из PostgreSQL
\q
```

### 5. Настройка переменных окружения

#### Создайте файл `.env` в корне проекта:
```env
# Основные настройки
NODE_ENV=development
PORT=5000

# База данных
DATABASE_URL=postgresql://lavilla_user:your_password@localhost:5432/lavilla_pine

# Email настройки (опционально)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Telegram Bot (опционально)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Yandex Maps API
YANDEX_MAPS_API_KEY=your_yandex_maps_key
```

### 6. Миграция базы данных

#### Выполните миграции:
```bash
# Генерация миграций
npx drizzle-kit generate

# Применение миграций
npx drizzle-kit migrate
```

### 7. Настройка Visual Studio Code

#### Рекомендуемые расширения:
- **TypeScript and JavaScript Language Features**
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Auto Rename Tag**
- **Prettier - Code formatter**
- **ESLint**

#### Создайте файл `.vscode/settings.json`:
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

### 8. Запуск проекта

#### Запустите в режиме разработки:
```bash
npm run dev
```

#### Откройте в браузере:
```
http://localhost:5000
```

## Возможные проблемы и решения

### 1. Проблемы с портами
```bash
# Если порт 5000 занят, измените в package.json:
"dev": "NODE_ENV=development PORT=3000 tsx server/index.ts"
```

### 2. Проблемы с базой данных
```bash
# Проверьте статус PostgreSQL
sudo service postgresql status

# Перезапустите PostgreSQL
sudo service postgresql restart
```

### 3. Проблемы с зависимостями
```bash
# Очистите кеш npm
npm cache clean --force

# Удалите node_modules и переустановите
rm -rf node_modules package-lock.json
npm install
```

### 4. Проблемы с TypeScript
```bash
# Глобальная установка TypeScript
npm install -g typescript

# Проверьте версию
tsc --version
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
│   ├── storage.ts          # Работа с базой данных
│   └── index.ts            # Точка входа сервера
├── shared/                 # Общие типы и схемы
│   └── schema.ts           # Схемы базы данных
├── migrations/             # Миграции базы данных
├── public/                 # Статические файлы
├── .env                    # Переменные окружения
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

### База данных:
```bash
npx drizzle-kit studio     # Веб-интерфейс для БД
npx drizzle-kit generate   # Генерация миграций
npx drizzle-kit migrate    # Применение миграций
```

### Проверка кода:
```bash
npm run type-check   # Проверка TypeScript
```

## Готово!

После выполнения всех шагов ваш проект La Villa Pine будет полностью работать в локальной среде разработки. Вы сможете:

- Редактировать код в Visual Studio Code
- Видеть изменения в реальном времени
- Работать с базой данных локально
- Развертывать проект на любом хостинге

Если возникнут проблемы, проверьте логи в терминале и убедитесь, что все зависимости установлены правильно.