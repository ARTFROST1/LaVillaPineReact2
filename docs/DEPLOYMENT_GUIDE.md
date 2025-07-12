# Подробная инструкция по деплою сайта La Villa Pine

## Обзор процесса деплоя

Ваш проект - это fullstack приложение (React + Express), которое требует:
- Node.js сервер для backend
- Статические файлы для frontend
- Домен и SSL сертификат
- Переменные окружения

## Рекомендуемые хостинги для вашего проекта

### 1. Vercel (Рекомендуется для начинающих)
**Плюсы:** Простой деплой, бесплатный план, автоматический SSL
**Минусы:** Ограничения по времени выполнения функций

### 2. Render (Рекомендуется для fullstack)
**Плюсы:** Поддержка Node.js, PostgreSQL, бесплатный план
**Минусы:** Медленный холодный старт на бесплатном плане

### 3. Railway
**Плюсы:** Простой деплой, хорошая производительность
**Минусы:** Платный с самого начала

### 4. VPS (DigitalOcean, Linode, Vultr)
**Плюсы:** Полный контроль, лучшая производительность
**Минусы:** Требует технических знаний

## Пошаговая инструкция для каждого хостинга

---

## ВАРИАНТ 1: Vercel (Самый простой)

### Подготовка проекта

1. **Создайте аккаунт на Vercel:**
   - Зайдите на https://vercel.com
   - Зарегистрируйтесь через GitHub

2. **Загрузите проект на GitHub:**
   ```bash
   # В папке проекта
   git init
   git add .
   git commit -m "Initial commit"
   
   # Создайте репозиторий на GitHub и подключите
   git remote add origin https://github.com/ваше_имя/lavilla-pine.git
   git push -u origin main
   ```

3. **Создайте конфигурацию для Vercel:**
   
   Создайте файл `vercel.json`:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server/index.ts",
         "use": "@vercel/node"
       },
       {
         "src": "client/**/*",
         "use": "@vercel/static-build",
         "config": {
           "distDir": "dist/public"
         }
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "/server/index.ts"
       },
       {
         "src": "/(.*)",
         "dest": "/client/$1"
       }
     ],
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

4. **Обновите package.json для Vercel:**
   ```json
   {
     "scripts": {
       "build": "vite build",
       "vercel-build": "npm run build"
     }
   }
   ```

### Деплой на Vercel

1. **Подключите проект:**
   - Зайдите в панель Vercel
   - Нажмите "New Project"
   - Выберите ваш GitHub репозиторий
   - Нажмите "Deploy"

2. **Настройте переменные окружения:**
   - В панели проекта перейдите в Settings → Environment Variables
   - Добавьте:
     ```
     NODE_ENV=production
     YANDEX_MAPS_API_KEY=ваш_ключ
     EMAIL_USER=ваш_email
     EMAIL_PASS=ваш_пароль
     ```

3. **Настройте домен:**
   - Перейдите в Settings → Domains
   - Добавьте ваш домен
   - Настройте DNS записи у регистратора домена

---

## ВАРИАНТ 2: Render (Лучший для fullstack)

### Подготовка проекта

1. **Создайте аккаунт на Render:**
   - Зайдите на https://render.com
   - Зарегистрируйтесь через GitHub

2. **Подготовьте build скрипт:**
   ```json
   {
     "scripts": {
       "build": "npm run build:client && npm run build:server",
       "build:client": "vite build",
       "build:server": "esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
       "start": "node dist/index.js"
     }
   }
   ```

3. **Создайте файл render.yaml:**
   ```yaml
   services:
     - type: web
       name: lavilla-pine
       env: node
       buildCommand: npm run build
       startCommand: npm start
       envVars:
         - key: NODE_ENV
           value: production
         - key: YANDEX_MAPS_API_KEY
           sync: false
         - key: EMAIL_USER
           sync: false
         - key: EMAIL_PASS
           sync: false
   ```

### Деплой на Render

1. **Создайте Web Service:**
   - Зайдите в панель Render
   - Нажмите "New" → "Web Service"
   - Подключите GitHub репозиторий
   - Выберите ветку main

2. **Настройте параметры:**
   - Runtime: Node
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Auto-Deploy: Yes

3. **Добавьте переменные окружения:**
   - В настройках сервиса перейдите в Environment
   - Добавьте необходимые переменные

4. **Настройте домен:**
   - Перейдите в Settings → Custom Domain
   - Добавьте ваш домен
   - Настройте DNS записи

---

## ВАРИАНТ 3: VPS (Максимальный контроль)

### Подготовка VPS

1. **Создайте VPS:**
   - Выберите провайдера (DigitalOcean, Vultr, Linode)
   - Создайте дроплет с Ubuntu 22.04
   - Подключитесь по SSH

2. **Установите необходимое ПО:**
   ```bash
   # Обновите систему
   sudo apt update && sudo apt upgrade -y
   
   # Установите Node.js
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Установите PM2 для управления процессами
   sudo npm install -g pm2
   
   # Установите Nginx
   sudo apt install nginx -y
   
   # Установите Certbot для SSL
   sudo apt install certbot python3-certbot-nginx -y
   ```

### Деплой на VPS

1. **Загрузите проект:**
   ```bash
   # Клонируйте репозиторий
   git clone https://github.com/ваше_имя/lavilla-pine.git
   cd lavilla-pine
   
   # Установите зависимости
   npm install
   
   # Соберите проект
   npm run build
   ```

2. **Настройте переменные окружения:**
   ```bash
   # Создайте .env файл
   nano .env
   
   # Добавьте переменные:
   NODE_ENV=production
   PORT=3000
   YANDEX_MAPS_API_KEY=ваш_ключ
   EMAIL_USER=ваш_email
   EMAIL_PASS=ваш_пароль
   ```

3. **Настройте PM2:**
   ```bash
   # Создайте конфигурацию PM2
   nano ecosystem.config.js
   ```
   
   ```javascript
   module.exports = {
     apps: [{
       name: 'lavilla-pine',
       script: 'dist/index.js',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '1G',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   };
   ```

   ```bash
   # Запустите приложение
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

4. **Настройте Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/lavilla-pine
   ```
   
   ```nginx
   server {
       listen 80;
       server_name ваш-домен.com www.ваш-домен.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   # Активируйте конфигурацию
   sudo ln -s /etc/nginx/sites-available/lavilla-pine /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. **Настройте SSL:**
   ```bash
   sudo certbot --nginx -d ваш-домен.com -d www.ваш-домен.com
   ```

---

## Настройка домена

### Покупка домена

1. **Регистраторы доменов:**
   - Namecheap.com
   - GoDaddy.com
   - Reg.ru (для .ru доменов)

2. **Выберите подходящий домен:**
   - Короткий и запоминающийся
   - Связанный с вашим бизнесом
   - Желательно .com или локальный (.ru)

### Настройка DNS

**Для Vercel/Render:**
```
Type: A
Name: @
Value: IP_адрес_хостинга

Type: CNAME
Name: www
Value: ваш-домен.com
```

**Для VPS:**
```
Type: A
Name: @
Value: IP_адрес_VPS

Type: A
Name: www
Value: IP_адрес_VPS
```

---

## Подводные камни и решения

### 1. Проблемы с переменными окружения

**Проблема:** Переменные не передаются в production
**Решение:** 
- Проверьте правильность имен переменных
- Убедитесь, что они добавлены в настройках хостинга
- Для frontend переменных добавьте префикс `VITE_`

### 2. Проблемы с маршрутизацией

**Проблема:** 404 ошибка при обновлении страницы
**Решение:** Настройте fallback на index.html для SPA

### 3. Проблемы с CORS

**Проблема:** Блокировка запросов между frontend и backend
**Решение:** Добавьте CORS middleware в Express

### 4. Проблемы с SSL

**Проблема:** "Небезопасное соединение"
**Решение:** 
- Убедитесь, что SSL сертификат установлен
- Проверьте, что все ресурсы загружаются через HTTPS

### 5. Проблемы с производительностью

**Проблема:** Медленная загрузка
**Решение:**
- Оптимизируйте изображения
- Используйте CDN
- Включите сжатие gzip

### 6. Проблемы с email

**Проблема:** Письма не отправляются
**Решение:**
- Используйте App Password для Gmail
- Проверьте настройки SMTP
- Рассмотрите использование SendGrid/Mailgun

---

## Чек-лист перед деплоем

- [ ] Все зависимости установлены
- [ ] Проект собирается без ошибок
- [ ] Переменные окружения настроены
- [ ] Код загружен в GitHub
- [ ] Домен куплен и настроен
- [ ] SSL сертификат установлен
- [ ] Форма обратной связи тестируется
- [ ] Все страницы открываются корректно
- [ ] Адаптивность проверена на мобильных
- [ ] Yandex Maps работает с API ключом

---

## Рекомендуемая последовательность действий

1. **Подготовьте проект локально** (убедитесь, что все работает)
2. **Загрузите на GitHub**
3. **Выберите хостинг** (рекомендую Render для начала)
4. **Купите домен**
5. **Настройте деплой** на выбранном хостинге
6. **Настройте DNS** записи
7. **Добавьте переменные окружения**
8. **Протестируйте сайт**
9. **Настройте SSL** (обычно автоматически)
10. **Запустите и проверьте** все функции

Эта инструкция поможет вам успешно запустить сайт в продакшене. Выберите подходящий вариант хостинга и следуйте инструкциям пошагово.