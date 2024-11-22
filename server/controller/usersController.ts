import { Request, Response } from "express";
import User from "../models/user.model";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving users", error: err });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params; 
    
    const userId = Number(id); // YALI: +id is a shortcut for Number(id)
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" }); // YALI: Make a more detailed error message: `User with id ${userId} not found`
    }

    await user.destroy();
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error deleting user", error: err });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;
    
    /*
      YALI: What if you had 20 fields to update? the easier way to do it is:
      const userUpdate: Partial<User> = req.body
      ...
      const newUser = {...oldUser, ...newUser}
      
      read online about what that syntax means
    */

    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
};
