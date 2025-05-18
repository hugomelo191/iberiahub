import type { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../server/index';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Forward the request to the Express app
  return new Promise((resolve, reject) => {
    app(req, res);
    res.on('finish', resolve);
    res.on('error', reject);
  });
} 