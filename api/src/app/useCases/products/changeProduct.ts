import type { Request, Response } from "express";

import { Product } from "../../models/Product.js";

export async function changeProduct(req: Request, res: Response) {
  try {

    const { productId } = req.params;

    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const updateData: { [key: string]: any } = {};

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (imagePath) updateData.imagePath = imagePath;
    if (price) updateData.price = Number(price);
    if (category) updateData.category = category;
    if (ingredients) updateData.ingredients = JSON.parse(ingredients);

    await Product.findByIdAndUpdate(productId, updateData);

    res.sendStatus(204);

  } catch {

    res.sendStatus(500);

  }
}
