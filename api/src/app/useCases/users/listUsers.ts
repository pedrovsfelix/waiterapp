import type { Request, Response } from "express";

import { User } from "../../models/User.js";

export async function listUsers(req: Request, res: Response) {
  try {
    const users = await User.find();
    console.log(users)

    res.status(200).json(users);
  } catch {

    res.sendStatus(500);

  }
}
