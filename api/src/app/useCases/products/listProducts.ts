import type { Request, Response } from "express";

import { Product } from "../../models/Product.js";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    res.sendStatus(200).json(products);
  } catch {

    res.sendStatus(500);

  }
}
