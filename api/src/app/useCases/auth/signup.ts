import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../models/User.js';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function signup(req: Request, res: Response) {
    if (!JWT_SECRET) {
        return res.status(500).json({ error: 'JWT_SECRET não configurado.' });
    }

    try {

        const { name, email, password, type } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ error: 'Credenciais inválidas.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            type
        });

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
                res.status(201).json({
                    message: 'Usuário cadastrado com sucesso!',
                    token,
                    type: user.type
                });
            }
        );

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    }
}
