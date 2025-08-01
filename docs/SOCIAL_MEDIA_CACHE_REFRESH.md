# Обновление превью ссылок в социальных сетях

## Проблема
После обновления изображения Open Graph (og-image) на сайте, социальные сети (Telegram, WhatsApp, Facebook, VK) могут продолжать показывать старое превью из-за кэширования.

## Решение

### 1. Автоматическое обновление (уже сделано)
✅ Обновлено изображение `og-image-final.jpg` 
✅ Добавлен версионный параметр `?v=2025070903`
✅ Обновлены метаданные с новым временем

### 2. Принудительная очистка кэша для разных платформ

#### Facebook и Instagram
1. Откройте [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Вставьте URL: `https://lavillapine.onrender.com/`
3. Нажмите "Debug" 
4. Нажмите "Scrape Again" для принудительного обновления

#### Telegram
1. Отправьте себе в "Сохраненные сообщения" ссылку с параметром:
   `https://lavillapine.onrender.com/?cache=refresh`
2. Если не помогло, подождите 24 часа - Telegram обновляет кэш автоматически

#### VK
1. Откройте [VK Link Preview Debugger](https://vk.com/dev/share_details)
2. Вставьте URL и проверьте превью
3. Или поделитесь ссылкой в личной переписке для тестирования

#### WhatsApp 
1. Отправьте ссылку себе или в группу для тестирования
2. WhatsApp обновляет превью при первом запросе новой ссылки

#### Twitter/X
1. Откройте [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Вставьте URL для проверки и обновления кэша

### 3. Проверка результата
После деплоя на Render проверьте:
1. Прямая ссылка на изображение: `https://lavillapine.onrender.com/images/og-image-final.jpg`
2. Тестовая страница: `https://lavillapine.onrender.com/test-og.html`
3. Основной сайт: `https://lavillapine.onrender.com/`

### 4. Если превью всё ещё старое
- Подождите 1-2 часа для полного обновления кэша
- Используйте разные параметры URL: `?refresh=1`, `?update=new`
- Проверьте что файл `og-image-final.jpg` правильно копируется при деплое

### 5. Технические детали
- Размер изображения: 1200x630px (стандарт Open Graph)
- Формат: JPEG
- Текущая версия: `v=2025070903`
- Добавлены заголовки для отключения кэширования

## Заметки для будущих обновлений
При следующих изменениях изображения:
1. Создайте новый файл с уникальным именем
2. Обновите версию в параметре `?v=`
3. Измените время в `og:updated_time`
4. Используйте инструменты для очистки кэша социальных сетей