import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.json({ 
    status: 'ok', 
    message: 'Esports Ibéricos API is running!',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
} 