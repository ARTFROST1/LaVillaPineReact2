import { EmailData } from './email';

export async function sendTelegramNotification(data: EmailData): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  console.log('Проверка Telegram настроек:');
  console.log('TELEGRAM_BOT_TOKEN доступен:', !!botToken);
  console.log('TELEGRAM_CHAT_ID доступен:', !!chatId);
  
  if (!botToken || !chatId) {
    console.log('Telegram настройки не найдены, пропускаем отправку');
    return false;
  }
  
  // Валидация формата токена и chat_id
  if (!botToken.match(/^\d+:[A-Za-z0-9_-]+$/)) {
    console.error('Неверный формат TELEGRAM_BOT_TOKEN. Должен быть: 123456789:ABCDEF...');
    return false;
  }
  
  if (!chatId.match(/^-?\d+$/)) {
    console.error('Неверный формат TELEGRAM_CHAT_ID. Должен быть числом (например: 123456789 или -987654321)');
    return false;
  }
  
  try {
    const message = `
🏠 <b>Новое сообщение с сайта La Villa Pine</b>

👤 <b>Имя:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
${data.phone ? `📞 <b>Телефон:</b> ${data.phone}` : ''}

💬 <b>Сообщение:</b>
${data.message}
    `.trim();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    console.log('Отправка запроса к Telegram API...');
    console.log('URL:', url.replace(botToken, '[TOKEN]'));
    console.log('Chat ID:', chatId);
    
    const response = await fetch(url, {
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

    const responseText = await response.text();
    console.log('Telegram API ответ:', response.status, responseText);

    if (response.ok) {
      console.log('Telegram уведомление отправлено успешно');
      return true;
    } else {
      console.error('Ошибка отправки Telegram сообщения:', responseText);
      return false;
    }
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error);
    return false;
  }
}