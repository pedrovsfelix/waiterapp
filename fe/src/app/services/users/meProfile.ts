import type { User } from "../../entities/User";
import { httpClient } from "../httpClient";

type MeResponse = User;

export async function meProfile() {
  const { data } = await httpClient.get<MeResponse>('/me');

  return data;
}
