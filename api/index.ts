import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';

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

// Catch-all route para 404
app.use((_req, res) => {
  res.status(404).json({ 
    status: 'error',
    message: 'Rota não encontrada'
  });
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.json({
    name: 'Esports Ibéricos API',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      health: '/api/health'
    }
  });
} 