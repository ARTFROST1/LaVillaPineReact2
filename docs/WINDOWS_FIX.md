# Быстрое решение для Windows

## Проблема
Ошибка: `'NODE_ENV' is not recognized as an internal or external command`

## Решение

### 1. Установите cross-env:
```bash
npm install cross-env
```

### 2. Отредактируйте файл package.json:
Найдите секцию "scripts" и измените строки:

**Было:**
```json
"dev": "NODE_ENV=development tsx server/index.ts",
"start": "NODE_ENV=production node dist/index.js",
```

**Стало:**
```json
"dev": "cross-env NODE_ENV=development tsx server/index.ts",
"start": "cross-env NODE_ENV=production node dist/index.js",
```

### 3. Теперь запустите проект:
```bash
npm run dev
```

## Готово!
Проект должен запуститься без ошибок на Windows.