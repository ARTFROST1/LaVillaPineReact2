import nodemailer from 'nodemailer';

// Попробуем разные настройки для email сервисов
function createTransporter() {
  console.log('Создание email транспортера...');
  console.log('EMAIL_USER доступен:', !!process.env.EMAIL_USER);
  console.log('EMAIL_PASS доступен:', !!process.env.EMAIL_PASS);
  
  // Сначала попробуем Gmail SMTP
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    console.log('Найдены учетные данные email');
    
    if (process.env.EMAIL_USER.includes('@gmail.com')) {
      console.log('Настройка Gmail SMTP...');
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
      console.log('Настройка Yandex SMTP транспортера...');
      
      // Попробуем разные конфигурации для Yandex
      const yandexConfigs = [
        {
          host: 'smtp.yandex.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        },
        {
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
        },
        {
          host: 'smtp.yandex.com',
          port: 25,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          },
          tls: {
            rejectUnauthorized: false
          }
        }
      ];
      
      // Возвращаем первую конфигурацию, в будущем можем добавить перебор
      return nodemailer.createTransport(yandexConfigs[0]);
    }
  } else {
    console.log('Учетные данные email не найдены');
  }
  
  // Резервный вариант - используем формspree или аналогичный сервис
  return null;
}

const transporter = createTransporter();

export interface EmailData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  // Если есть настроенный транспортер, используем его
  if (transporter) {
    try {
      console.log('Проверка SMTP соединения...');
      console.log('EMAIL_USER:', process.env.EMAIL_USER);
      console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'не установлен');
      
      await transporter.verify();
      console.log('SMTP соединение проверено успешно');
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'lavillapine@yandex.com',
        subject: `Новое сообщение от ${data.name} - La Villa Pine`,
        html: `
          <h2>Новое сообщение с сайта La Villa Pine</h2>
          <p><strong>Имя:</strong> ${data.name}</p>
          <p><strong>Телефон:</strong> ${data.phone}</p>
          ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}
          <p><strong>Сообщение:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Отправлено с сайта La Villa Pine</em></p>
          <p><em>Для связи используйте телефон: ${data.phone}</em></p>
        `
      };

      const result = await transporter.sendMail(mailOptions);
      console.log('Email отправлен успешно:', result.messageId);
      return true;
    } catch (error: unknown) {
      console.error('Ошибка отправки email через SMTP:', error);

      const code =
        error && typeof error === 'object' && 'code' in error
          ? (error as { code?: unknown }).code
          : undefined;

      // Специальная обработка ошибок аутентификации
      if (code === 'EAUTH') {
        console.error('Проблема с аутентификацией. Проверьте:');
        console.error('1. Правильность email адреса');
        console.error('2. Используется ли пароль приложения (не основной пароль)');
        console.error('3. Включена ли двухфакторная аутентификация');
        console.error('4. Разрешен ли доступ для внешних приложений');
      }
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