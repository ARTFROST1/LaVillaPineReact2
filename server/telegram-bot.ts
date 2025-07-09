import { EmailData } from './email';

export async function sendTelegramNotification(data: EmailData): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  if (!botToken || !chatId) {
    console.log('Telegram настройки не найдены, пропускаем отправку');
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

    if (response.ok) {
      console.log('Telegram уведомление отправлено успешно');
      return true;
    } else {
      console.error('Ошибка отправки Telegram сообщения:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error);
    return false;
  }
}