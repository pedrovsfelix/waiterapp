import type { Request, Response } from "express";

import { User } from "../../models/User.js";

export async function deleteUser(req: Request, res: Response) {
  try {

    const { userId } = req.params;

    await User.findByIdAndDelete(userId);

    res.sendStatus(204);

  } catch {

    res.sendStatus(500);

  }
}
