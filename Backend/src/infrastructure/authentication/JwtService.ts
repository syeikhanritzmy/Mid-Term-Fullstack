import jwt from 'jsonwebtoken';

class JwtService {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  generateToken(payload: any): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

export { JwtService };
