import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./email";
import { sendTelegramNotification } from "./telegram-bot";
import { sendEmailJSMessage, sendFormspreeMessage } from "./emailjs-service";
import { sendSimpleEmail, sendWebhookEmail, sendNetlifyForm } from "./simple-email";

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

  const httpServer = createServer(app);
  return httpServer;
}
