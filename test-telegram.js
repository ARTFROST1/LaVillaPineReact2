#!/usr/bin/env node

// Простой скрипт для тестирования Telegram бота
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

console.log('=== Тестирование Telegram бота ===');
console.log('TELEGRAM_BOT_TOKEN:', botToken ? `${botToken.slice(0, 10)}...` : 'НЕ НАЙДЕН');
console.log('TELEGRAM_CHAT_ID:', chatId || 'НЕ НАЙДЕН');

if (!botToken || !chatId) {
  console.error('❌ Telegram настройки не найдены!');
  console.log('\nДля настройки Telegram бота:');
  console.log('1. Создайте бота через @BotFather');
  console.log('2. Получите токен бота');
  console.log('3. Найдите ваш Chat ID через @userinfobot');
  console.log('4. Добавьте секреты в Render:');
  console.log('   - TELEGRAM_BOT_TOKEN: токен от BotFather');
  console.log('   - TELEGRAM_CHAT_ID: ваш Chat ID');
  process.exit(1);
}

// Проверка формата токена
if (!botToken.match(/^\d+:[A-Za-z0-9_-]+$/)) {
  console.error('❌ Неверный формат TELEGRAM_BOT_TOKEN');
  console.log('Должен быть: 123456789:ABCDEF...');
  process.exit(1);
}

// Проверка формата Chat ID
if (!chatId.match(/^-?\d+$/)) {
  console.error('❌ Неверный формат TELEGRAM_CHAT_ID');
  console.log('Должен быть числом (например: 123456789 или -987654321)');
  process.exit(1);
}

// Отправка тестового сообщения
async function testTelegram() {
  try {
    const message = `🧪 Тестовое сообщение от La Villa Pine\n\n⏰ Время: ${new Date().toLocaleString('ru-RU')}\n🌐 Сервер: ${process.env.NODE_ENV || 'development'}`;
    
    console.log('📤 Отправка тестового сообщения...');
    
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Тестовое сообщение отправлено успешно!');
      console.log('📝 Message ID:', result.message_id);
    } else {
      console.error('❌ Ошибка отправки:', result);
      
      if (result.error_code === 400 && result.description.includes('chat not found')) {
        console.log('\n💡 Возможные причины:');
        console.log('- Неверный TELEGRAM_CHAT_ID');
        console.log('- Бот не добавлен в чат');
        console.log('- Не отправлено /start боту');
      }
    }
  } catch (error) {
    console.error('❌ Ошибка:', error.message);
  }
}

testTelegram();