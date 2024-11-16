import { Sequelize } from "sequelize";
require("dotenv").config();

// Initialize Sequelize with PostgreSQL connection details
const sequelize = new Sequelize({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  dialect: "postgres",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "your_password_here",
  database: process.env.DB_NAME || "postgres",
  logging: false, // Disable logging of queries to console
});

export default sequelize;
