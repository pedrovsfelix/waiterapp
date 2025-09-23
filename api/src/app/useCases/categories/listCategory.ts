import type { Request, Response } from "express";

import { Category } from "../../models/Category.js";

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();
    console.log(categories)

    res.status(200).json(categories);
  } catch {

    res.sendStatus(500);

  }
}
