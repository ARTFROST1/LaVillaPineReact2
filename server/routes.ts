import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Сохранить сообщение в базе данных
      const message = await storage.createContactMessage(validatedData);
      
      // Отправить email
      const emailSent = await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message
      });
      
      if (emailSent) {
        res.json({ success: true, message: "Сообщение отправлено успешно!", id: message.id });
      } else {
        res.json({ success: true, message: "Сообщение сохранено, но не удалось отправить email.", id: message.id });
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
