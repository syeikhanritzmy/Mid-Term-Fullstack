import { NextFunction, Request, Response } from 'express';
import { JwtService } from '../infrastructure/authentication/JwtService';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}

function jwtMiddleware(JwtService: JwtService) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }
    try {
      const decoded = JwtService.verifyToken(token);
      req.user = decoded;
    
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}

export default jwtMiddleware;
