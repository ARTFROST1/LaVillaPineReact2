import { EmailData } from './email';

// Простая отправка email через API с обходом SMTP проблем
export async function sendSimpleEmail(data: EmailData): Promise<boolean> {
  try {
    // Используем простой HTTP endpoint для отправки email
    const webhookUrl = 'https://formsubmit.co/lavillapine@yandex.com';
    
    const formData = new URLSearchParams({
      name: data.name,
      phone: data.phone,
      email: data.email || '',
      message: data.message,
      _subject: `Новое сообщение от ${data.name} - La Villa Pine`,
      _next: 'https://thankyou.com',
      _captcha: 'false'
    });
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData
    });
    
    if (response.ok) {
      console.log('Email отправлен через FormSubmit');
      return true;
    } else {
      console.error('Ошибка FormSubmit:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Ошибка при отправке через FormSubmit:', error);
    return false;
  }
}

// Альтернативный способ через другой сервис
export async function sendWebhookEmail(data: EmailData): Promise<boolean> {
  try {
    // Используем другой популярный сервис
    const webhookUrl = 'https://submit-form.com/xsE5vC8P';
    
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email || '',
      message: data.message,
      _subject: `Новое сообщение от ${data.name} - La Villa Pine`
    };
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      console.log('Email отправлен через Submit Form');
      return true;
    } else {
      console.error('Ошибка Submit Form:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Ошибка при отправке через Submit Form:', error);
    return false;
  }
}

// Резервный способ через Netlify Forms
export async function sendNetlifyForm(data: EmailData): Promise<boolean> {
  try {
    const netlifyEndpoint = process.env.NETLIFY_FORM_ENDPOINT;
    
    if (!netlifyEndpoint) {
      console.log('Netlify endpoint не настроен');
      return false;
    }
    
    const formData = new URLSearchParams({
      'form-name': 'contact',
      name: data.name,
      phone: data.phone,
      email: data.email || '',
      message: data.message
    });
    
    const response = await fetch(netlifyEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData
    });
    
    if (response.ok) {
      console.log('Email отправлен через Netlify Forms');
      return true;
    } else {
      console.error('Ошибка Netlify Forms:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Ошибка при отправке через Netlify Forms:', error);
    return false;
  }
}