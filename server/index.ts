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
app.use("/users", userRoutes); // YALI: Great!

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Server is running on port ${PORT}`);
});

/* YALI
  As someone who just downloaded your repository, it's hard to understand what i need to do in order to
  Get it working. please provide a README file that explains all the things i need to have (for example postgres db)
  And all the things i need to do (for example cd server, npm i, etc) in order to run everything!
*/

// YALI: You don't know how to spell restaurant