// app/middleware/auth.ts
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export interface AuthenticatedRequest extends Request {
    userId?: string;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

export const isAuthenticated = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {

    if (!JWT_SECRET) {
        return res.status(500).json({ error: 'Configuração de servidor inválida.' });
    }

    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ error: 'Acesso negado. Nenhum token fornecido.' });
    }

    const [scheme, token] = authHeader.split(' ');

    if (scheme !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Formato de token inválido. Use: Bearer [token]' });
    }

    try {

        const decoded = jwt.verify(token, JWT_SECRET) as { user: { id: string } };

        req.userId = decoded.user.id;

        next();
    } catch (err) {

        res.status(401).json({ error: 'Token inválido ou expirado.' });

    }
};
