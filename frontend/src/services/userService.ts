import axios from "axios";
import { User } from "../types/user";

const api = axios.create({
  baseURL: "http://localhost:3000/users",
});

export const getAllUsers = async (): Promise<User[]> => {
  const response = await api.get("/");
  return response.data;
};

export const createUser = async (user: User): Promise<User> => {
  const response = await api.post("/", user);
  return response.data;
};

export const updateUser = async (
  id: string,
  user: Partial<User>
): Promise<User> => {
  const response = await api.put(`/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/${id}`);
};
