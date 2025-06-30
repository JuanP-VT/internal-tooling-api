import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { PKT1_BASE_API } = process.env;
    try {
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const response = await fetch(`${PKT1_BASE_API}/Login/checksession`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      next();
    } catch (error) {
      Logger.error(error);
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
}
