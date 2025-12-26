import type { Response } from 'express';
import { User } from '../../models/User.js';
import type { AuthenticatedRequest } from '../../middleware/auth.js';

export async function updateMe(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const { name, email, password } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    user.name = name;
    user.email = email;

    if (password) {
      user.password = password;
    }

    await user.save();

    res.json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar perfil." });
  }
}
