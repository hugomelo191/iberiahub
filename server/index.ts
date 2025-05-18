import express, { type Request, Response, NextFunction } from "express";
import path from "path";

const app = express();

// Middleware para CORS
app.use((req, res, next) => {
  const allowedOrigins = ['https://iberiahub.vercel.app', 'http://localhost:3000'];
  const origin = req.headers.origin;
  
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
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

      console.log(logLine);
    }
  });

  next();
});

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Rota raiz
app.get('/', (_req, res) => {
  res.json({
    name: 'Esports Ibéricos API',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      health: '/api/health'
    }
  });
});

// API routes
app.get('/api/health', (_req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Esports Ibéricos API is running!',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(process.cwd(), "dist", "client");
  app.use(express.static(distPath));
}

// Catch-all route para o frontend em produção
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "dist", "client", "index.html"));
  });
} else {
  // Rota 404 para desenvolvimento
  app.use((_req, res) => {
    res.status(404).json({ 
      status: 'error',
      message: 'Rota não encontrada'
    });
  });
}

// Start server if running locally
if (process.env.NODE_ENV === "development") {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

// Export for Vercel
export default app;
