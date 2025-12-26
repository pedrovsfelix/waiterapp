import { httpClient } from "../httpClient";

export interface UpdateUserParams {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  type?: "ADMIN" | "WAITER";
}

export async function update({ id, ...params }: UpdateUserParams) {
  const { data } = await httpClient.patch(`/users/${id}`, params);
  return data;
}
