import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Esports Ibéricos API is running!' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
