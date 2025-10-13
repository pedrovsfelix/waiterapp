import type { Response } from 'express';
import { User } from '../../models/User.js';
import type { AuthenticatedRequest } from '../../middleware/auth.js';

export async function me(req: AuthenticatedRequest, res: Response) {
    try {
        const userId = req.userId;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados do usuário.' });
    }
}
