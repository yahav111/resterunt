import express, { Request, Response } from "express";
import sequelize from "./models/sequelize";
import userRoutes from "./routes/userRoutes";
import cors from "cors";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

app.use(cors());

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Server is running on port ${PORT}`);
});
