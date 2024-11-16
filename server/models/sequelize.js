"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv").config();
// Initialize Sequelize with PostgreSQL connection details
const sequelize = new sequelize_1.Sequelize({
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    dialect: "postgres",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "your_password_here",
    database: process.env.DB_NAME || "postgres",
    logging: false, // Disable logging of queries to console
});
exports.default = sequelize;
