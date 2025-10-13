import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../models/User.js';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function signin(req: Request, res: Response) {
    if (!JWT_SECRET) {
        return res.status(500).json({ error: 'JWT_SECRET não configurado.' });
    }

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(400).json({ error: 'Credenciais inválidas.' });
        }

        const isMatch = await bcrypt.compare(password, user.password || '');

        if (!isMatch) {
            return res.status(400).json({ error: 'Credenciais inválidas.' });
        }

        const payload = {
            user: {
                id: user._id,
                type: user.type,
            },
        };

        jwt.sign(
            payload,
            JWT_SECRET,
            { expiresIn: '1d' },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    type: user.type
                });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao efetuar login.' });
    }
}
