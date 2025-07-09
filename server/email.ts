import nodemailer from 'nodemailer';

// Попробуем разные настройки для email сервисов
function createTransporter() {
  // Сначала попробуем Gmail SMTP
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    if (process.env.EMAIL_USER.includes('@gmail.com')) {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    }
    
    // Для Yandex с другими настройками
    if (process.env.EMAIL_USER.includes('@yandex.com')) {
      return nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
      });
    }
  }
  
  // Резервный вариант - используем формspree или аналогичный сервис
  return null;
}

const transporter = createTransporter();

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  // Если есть настроенный транспортер, используем его
  if (transporter) {
    try {
      await transporter.verify();
      
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@lavillapine.com',
        to: 'lavillapine@yandex.com',
        replyTo: data.email,
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
          <p><em>Для ответа используйте адрес: ${data.email}</em></p>
        `
      };

      const result = await transporter.sendMail(mailOptions);
      console.log('Email отправлен успешно:', result.messageId);
      return true;
    } catch (error) {
      console.error('Ошибка отправки email через SMTP:', error);
    }
  }
  
  // Резервный вариант - отправка через EmailJS или аналогичный сервис
  try {
    const emailServiceUrl = process.env.EMAIL_WEBHOOK_URL;
    if (emailServiceUrl) {
      const response = await fetch(emailServiceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'lavillapine@yandex.com',
          subject: `Новое сообщение от ${data.name} - La Villa Pine`,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message
        })
      });
      
      if (response.ok) {
        console.log('Email отправлен через webhook сервис');
        return true;
      }
    }
  } catch (error) {
    console.error('Ошибка отправки через webhook:', error);
  }
  
  console.log('Email не был отправлен - не настроены параметры отправки');
  return false;
}