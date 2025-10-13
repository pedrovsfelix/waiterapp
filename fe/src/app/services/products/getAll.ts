import type { Product } from "../../entities/Product";
import { httpClient } from "../httpClient";

type ProductResponse = Array<Product>;

export async function getAll() {

  const { data } = await httpClient.get<ProductResponse>('/products');

  return data;
}
