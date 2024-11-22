import axios from "axios";
import { User } from "../types/user";

const api = axios.create({
  baseURL: "http://localhost:3000/users", // YALI: User enviornment variable instead
}); // YALI: Why is base url with users? what if i have something other than users?

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

// YALI: What about login and register with JWT? very important