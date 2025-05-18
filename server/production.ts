import express from "express";
import path from "path";
import { registerRoutes } from "./routes";

const app = express();

// Middleware para CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
registerRoutes(app);

// Serve static files
const distPath = path.join(process.cwd(), 'dist', 'client');
app.use(express.static(distPath));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

export default app; 