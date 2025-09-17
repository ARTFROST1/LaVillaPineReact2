import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Список валидных клиентских роутов из App.tsx  
  const VALID_CLIENT_ROUTES = [
    '/',
    '/about', 
    '/gallery',
    '/contacts',
    '/booking',
    '/rules',
    '/admin',
    '/privacy-policy',
    '/consent',
    '/legal-documents'
  ];

  // Middleware для проверки 404 - должен быть ДО setupVite/serveStatic
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Пропускаем API роуты, статические файлы и служебные файлы Vite
    if (req.path.startsWith('/api') || 
        req.path.startsWith('/images') || 
        req.path.startsWith('/fonts') ||
        req.path.startsWith('/@') ||           // Vite служебные файлы (@react-refresh, @vite/client)
        req.path.startsWith('/src') ||         // Vite модули (/src/main.tsx)
        req.path.match(/\.(js|css|ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|txt|xml|json|webmanifest)$/)) {
      return next();
    }

    // Убираем query параметры и хэши для проверки роута
    const cleanPath = req.path.split('?')[0].split('#')[0];
    
    // Если роут невалидный, возвращаем 404
    if (!VALID_CLIENT_ROUTES.includes(cleanPath)) {
      return res.status(404).json({ error: "Page not found" });
    }
    
    // Роут валидный, пропускаем дальше в Vite/serveStatic
    next();
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    // Serve static files from public directory in development mode
    app.use(express.static("public"));
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Use PORT from environment variables (for Render) or default to 5000
  const port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
  const host = process.platform === "win32" ? "localhost" : "0.0.0.0";
  server.listen({
    port,
    host,
    reusePort: process.platform !== "win32", // Windows doesn't support reusePort
  }, () => {
    log(`serving on port ${port}`);
  });
})();
