# Тестирование Open Graph превью

## Что было исправлено:
1. Заменил временную картинку из Unsplash на собственное изображение с бассейном и логотипом
2. Добавил правильные размеры изображения (1200x630)
3. Добавил alt-текст для изображения
4. Создал специальный файл og-image.jpg для превью
5. Добавил дополнительные метатеги для лучшего отображения
6. Обновил описания для лучшего соответствия изображению

## Как протестировать:

### 1. Telegram
- Вставьте ссылку на сайт в чат
- Должна отобразиться ваша картинка вместо шаблонной

### 2. Facebook/WhatsApp
- Используйте инструмент: https://developers.facebook.com/tools/debug/
- Вставьте URL сайта и нажмите "Debug"
- Должна отобразиться ваша картинка

### 3. Twitter
- Используйте Card Validator: https://cards-dev.twitter.com/validator
- Вставьте URL сайта
- Должна отобразиться ваша картинка

### 4. LinkedIn
- Используйте Post Inspector: https://www.linkedin.com/post-inspector/
- Вставьте URL сайта
- Должна отобразиться ваша картинка

### 5. Общий тест
- Используйте https://www.opengraph.xyz/
- Вставьте URL сайта
- Проверьте все социальные сети

## Добавленные метатеги:

```html
<!-- Open Graph -->
<meta property="og:image" content="https://lavillapine.com/images/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="La Villa Pine - Роскошный гостевой дом в стиле лофт" />
<meta property="og:site_name" content="La Villa Pine" />
<meta property="og:locale" content="ru_RU" />
<meta property="og:image:type" content="image/jpeg" />

<!-- Twitter -->
<meta property="twitter:image" content="https://lavillapine.com/images/og-image.jpg" />
<meta property="twitter:image:alt" content="La Villa Pine - Роскошный гостевой дом в стиле лофт" />

<!-- Telegram -->
<meta property="telegram:channel" content="@lavillapine" />
```

## Важные файлы:
- `public/images/og-image.jpg` - основное изображение для превью
- `public/favicon.ico` - иконка сайта
- `client/index.html` - содержит все метатеги

## Примечания:
- Изображение og-image.jpg использует первую картинку из карусели
- Размер изображения оптимизирован для социальных сетей (1200x630)
- Все метатеги настроены на русский язык
- Превью будет обновляться не сразу - соцсети кэшируют данные