import type { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../server';

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Passar a requisição para o Express
  return new Promise((resolve, reject) => {
    app(req, res, (err: any) => {
      if (err) {
        return reject(err);
      }
      return resolve(undefined);
    });
  });
} 