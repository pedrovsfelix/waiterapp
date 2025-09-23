import type { Request, Response } from "express";

import { Category } from "../../models/Category.js";

export async function deleteCategory(req: Request, res: Response) {
  try {

    const { categoryId } = req.params;

    await Category.findByIdAndDelete(categoryId);

    res.sendStatus(204);

  } catch {

    res.sendStatus(500);

  }
}
