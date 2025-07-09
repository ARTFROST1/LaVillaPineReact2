import nodemailer from 'nodemailer';

// Настройка для Yandex SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || 'lavillapine@yandex.com',
    pass: process.env.EMAIL_PASS || ''
  }
});

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'lavillapine@yandex.com',
      to: 'lavillapine@yandex.com',
      subject: `Новое сообщение от ${data.name} - La Villa Pine`,
      html: `
        <h2>Новое сообщение с сайта La Villa Pine</h2>
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Телефон:</strong> ${data.phone}</p>` : ''}
        <p><strong>Сообщение:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Отправлено с сайта La Villa Pine</em></p>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email отправлен:', result.messageId);
    return true;
  } catch (error) {
    console.error('Ошибка отправки email:', error);
    return false;
  }
}