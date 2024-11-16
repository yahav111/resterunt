"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.findAll();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: "Error retrieving users", error: err });
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const newUser = yield user_model_1.default.create({ username, email, password });
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json({ message: "Error creating user", error: err });
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = Number(id);
        if (isNaN(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const user = yield user_model_1.default.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        yield user.destroy();
        return res.status(200).json({ message: "User deleted successfully" });
    }
    catch (err) {
        return res.status(500).json({ message: "Error deleting user", error: err });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;
        const user = yield user_model_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;
        yield user.save();
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ message: "Error updating user", error: err });
    }
});
exports.updateUser = updateUser;
