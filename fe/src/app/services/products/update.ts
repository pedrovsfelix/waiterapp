import { httpClient } from "../httpClient";

export interface UpdateProductParams {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export async function update({
  id,
  ...params
}: UpdateProductParams) {

  const { data } = await httpClient.patch(`/products/${id}`, params);

  return data;
}
