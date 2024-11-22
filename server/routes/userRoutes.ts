import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/usersController";

const router = express.Router();

router.get("/", getAllUsers); // YALI: what about get user by id?

router.post("/", createUser); // YALI: great seperation of routing!

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;

// YALI: Bad usage of tsc and typescript build. Make it so all the .js files are in a different directory called ./dist read online about how to do it
// YALI: Ignore js files and node_modules. never commit node_modules to your repository.