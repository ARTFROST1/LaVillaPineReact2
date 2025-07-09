import { EmailData } from './email';

export async function sendEmailJSMessage(data: EmailData): Promise<boolean> {
  try {
    // Используем EmailJS API для отправки email
    const emailjsServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID;
    const emailjsUserId = process.env.EMAILJS_USER_ID;
    
    if (!emailjsServiceId || !emailjsTemplateId || !emailjsUserId) {
      console.log('EmailJS настройки не найдены');
      return false;
    }
    
    const emailjsData = {
      service_id: emailjsServiceId,
      template_id: emailjsTemplateId,
      user_id: emailjsUserId,
      template_params: {
        to_email: 'lavillapine@yandex.com',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || '',
        message: data.message,
        subject: `Новое сообщение от ${data.name} - La Villa Pine`
      }
    };
    
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailjsData)
    });
    
    if (response.ok) {
      console.log('Email отправлен через EmailJS');
      return true;
    } else {
      console.error('Ошибка EmailJS:', response.status, await response.text());
      return false;
    }
  } catch (error) {
    console.error('Ошибка при отправке через EmailJS:', error);
    return false;
  }
}

// Альтернативный способ через Formspree
export async function sendFormspreeMessage(data: EmailData): Promise<boolean> {
  try {
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    
    if (!formspreeEndpoint) {
      console.log('Formspree endpoint не настроен');
      return false;
    }
    
    const formspreeData = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      message: data.message,
      _subject: `Новое сообщение от ${data.name} - La Villa Pine`,
      _replyto: data.email
    };
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formspreeData)
    });
    
    if (response.ok) {
      console.log('Email отправлен через Formspree');
      return true;
    } else {
      console.error('Ошибка Formspree:', response.status, await response.text());
      return false;
    }
  } catch (error) {
    console.error('Ошибка при отправке через Formspree:', error);
    return false;
  }
}