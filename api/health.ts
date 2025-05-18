const { VercelRequest, VercelResponse } = require('@vercel/node');

module.exports = function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.json({ 
    status: 'ok', 
    message: 'Esports Ibéricos API is running!',
    environment: process.env.VERCEL_ENV || 'development',
    timestamp: new Date().toISOString()
  });
} 