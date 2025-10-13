import { httpClient } from "../httpClient";

export interface CreateProductParams {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: [];
  category: string;
}

export async function create(params: CreateProductParams) {

  const { data } = await httpClient.post('/products', params);

  return data;
}
