# Dockerfile для деплоя на Render
FROM node:18-alpine

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем проект
RUN npm run build

# Копируем папку public в dist для статических файлов
RUN node copy-static.js

# Открываем порт
EXPOSE 5000

# Запускаем приложение
CMD ["npm", "start"]