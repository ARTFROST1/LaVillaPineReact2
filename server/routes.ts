import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./email";
import { sendTelegramNotification } from "./telegram-bot";
import { sendEmailJSMessage, sendFormspreeMessage } from "./emailjs-service";
import { sendSimpleEmail, sendWebhookEmail, sendNetlifyForm } from "./simple-email";
import { notifyIndexNow, getAllSiteUrls, getIndexNowKey, notifyIndexNowSingleUrl, validateIndexNowKey } from "./indexnow";
import { updateSitemap, getSitemapUrls } from "./sitemap-generator";
import { generateRealtyFeedXML, generateRealtyFeedJSON } from "./feed-generator";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Сохранить сообщение в базе данных
      const message = await storage.createContactMessage(validatedData);
      
      // Попытаться отправить уведомления разными способами
      const contactData = {
        name: validatedData.name,
        phone: validatedData.phone,
        message: validatedData.message
      };
      
      // Попробуем несколько способов отправки email
      const [
        emailSent,
        telegramSent,
        emailjsSent,
        formspreeOk,
        simpleEmailSent,
        webhookEmailSent,
        netlifyFormSent
      ] = await Promise.all([
        sendContactEmail(contactData),
        sendTelegramNotification(contactData),
        sendEmailJSMessage(contactData),
        sendFormspreeMessage(contactData),
        sendSimpleEmail(contactData),
        sendWebhookEmail(contactData),
        sendNetlifyForm(contactData)
      ]);
      
      const successMethods = [];
      if (emailSent) successMethods.push('SMTP');
      if (telegramSent) successMethods.push('Telegram');
      if (emailjsSent) successMethods.push('EmailJS');
      if (formspreeOk) successMethods.push('Formspree');
      if (simpleEmailSent) successMethods.push('FormSubmit');
      if (webhookEmailSent) successMethods.push('Submit Form');
      if (netlifyFormSent) successMethods.push('Netlify Forms');
      
      if (successMethods.length > 0) {
        res.json({ 
          success: true, 
          message: `Сообщение отправлено на lavillapine@yandex.com через ${successMethods.join(', ')}!`, 
          id: message.id 
        });
      } else {
        res.json({ 
          success: true, 
          message: "Сообщение сохранено в базе данных. Проверьте настройки email или Telegram для уведомлений.", 
          id: message.id 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Неверные данные формы", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Не удалось отправить сообщение" 
        });
      }
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  // Get Yandex Maps API key
  app.get("/api/yandex-maps-key", async (req, res) => {
    try {
      const apiKey = process.env.YANDEX_MAPS_API_KEY || "4b29ea94-0ed2-46d8-920e-632c0edc4864";
      res.json({ apiKey });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to get API key" 
      });
    }
  });

  // IndexNow protocol endpoint - notify search engines about URL changes
  app.post("/api/indexnow", async (req, res) => {
    try {
      const { urls } = req.body;
      
      if (!urls || !Array.isArray(urls)) {
        return res.status(400).json({ 
          success: false, 
          message: "URLs array is required" 
        });
      }

      // Валидация URL
      for (const url of urls) {
        if (!url.startsWith("https://lavillapine.onrender.com/")) {
          return res.status(400).json({ 
            success: false, 
            message: `Недопустимый URL: ${url}. Только URL сайта lavillapine.onrender.com разрешены.` 
          });
        }
      }

      const success = await notifyIndexNow(urls);
      
      if (success) {
        res.json({ 
          success: true, 
          message: `IndexNow уведомления отправлены для ${urls.length} URL` 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Не удалось отправить IndexNow уведомления" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Ошибка при отправке IndexNow уведомления" 
      });
    }
  });

  // IndexNow single URL endpoint (GET method as recommended by Yandex)
  app.post("/api/indexnow/single", async (req, res) => {
    try {
      const { url } = req.body;
      
      if (!url || typeof url !== "string") {
        return res.status(400).json({ 
          success: false, 
          message: "URL is required" 
        });
      }

      // Валидация URL
      if (!url.startsWith("https://lavillapine.onrender.com/")) {
        return res.status(400).json({ 
          success: false, 
          message: `Недопустимый URL: ${url}. Только URL сайта lavillapine.onrender.com разрешены.` 
        });
      }

      const success = await notifyIndexNowSingleUrl(url);
      
      if (success) {
        res.json({ 
          success: true, 
          message: `IndexNow уведомление отправлено для ${url}` 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Не удалось отправить IndexNow уведомление" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Ошибка при отправке IndexNow уведомления" 
      });
    }
  });

  // Notify all pages via IndexNow
  app.post("/api/indexnow/all", async (req, res) => {
    try {
      const urls = getAllSiteUrls();
      const success = await notifyIndexNow(urls);
      
      if (success) {
        res.json({ 
          success: true, 
          message: `IndexNow уведомления отправлены для всех страниц сайта (${urls.length} URL)` 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Не удалось отправить IndexNow уведомления для всех страниц" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Ошибка при отправке IndexNow уведомления для всех страниц" 
      });
    }
  });

  // Get IndexNow key for verification
  app.get("/api/indexnow/key", async (req, res) => {
    try {
      const key = getIndexNowKey();
      const isValid = validateIndexNowKey(key);
      res.json({ 
        key, 
        isValid,
        keyLocation: "https://lavillapine.onrender.com/indexnow-key.txt"
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to get IndexNow key" 
      });
    }
  });

  // Validate IndexNow key endpoint
  app.get("/api/indexnow/validate", async (req, res) => {
    try {
      const key = getIndexNowKey();
      const isValid = validateIndexNowKey(key);
      
      // Попытаемся получить ключ с сайта для проверки
      const response = await fetch("https://lavillapine.onrender.com/indexnow-key.txt");
      const keyFromSite = await response.text();
      const keyMatches = keyFromSite.trim() === key;
      
      res.json({ 
        success: true,
        keyValid: isValid,
        keyAccessible: response.ok,
        keyMatches: keyMatches,
        message: `Ключ IndexNow ${isValid && keyMatches ? 'настроен корректно' : 'требует проверки'}`
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Ошибка при проверке ключа IndexNow" 
      });
    }
  });

  // Update sitemap with current date
  app.post("/api/sitemap/update", async (req, res) => {
    try {
      const success = await updateSitemap();
      
      if (success) {
        res.json({ 
          success: true, 
          message: "Sitemap обновлен успешно" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Не удалось обновить sitemap" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Ошибка при обновлении sitemap" 
      });
    }
  });

  // Update sitemap and notify IndexNow
  app.post("/api/seo/update-all", async (req, res) => {
    try {
      // Update sitemap first
      const sitemapUpdated = await updateSitemap();
      
      // Then notify search engines
      const urls = getAllSiteUrls();
      const indexNowSent = await notifyIndexNow(urls);
      
      if (sitemapUpdated && indexNowSent) {
        res.json({ 
          success: true, 
          message: `Sitemap обновлен и IndexNow уведомления отправлены для ${urls.length} URL` 
        });
      } else if (sitemapUpdated) {
        res.json({ 
          success: true, 
          message: "Sitemap обновлен, но не удалось отправить IndexNow уведомления" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Не удалось обновить sitemap и отправить IndexNow уведомления" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Ошибка при обновлении SEO данных" 
      });
    }
  });

  // Реалти фид для Яндекса (XML формат)
  app.get("/realty-feed.xml", (req, res) => {
    try {
      const feedXML = generateRealtyFeedXML();
      res.set({
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600' // Кеш на 1 час
      });
      res.send(feedXML);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Ошибка при генерации реалти фида" 
      });
    }
  });

  // Реалти фид для Яндекса (JSON формат)
  app.get("/realty-feed.json", (req, res) => {
    try {
      const feedJSON = generateRealtyFeedJSON();
      res.set({
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600' // Кеш на 1 час
      });
      res.send(feedJSON);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Ошибка при генерации реалти фида JSON" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
