"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../config/db");
const jwt_1 = require("../config/jwt");
const register = async (req, res) => {
    const { full_name, email, password } = req.body;
    if (!full_name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        const userCheck = await db_1.pool.query('SELECT id FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Email is already registered.' });
        }
        const salt = await bcryptjs_1.default.genSalt(10);
        const hashedPassword = await bcryptjs_1.default.hash(password, salt);
        const newUser = await db_1.pool.query('INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING id, full_name, email, role', [full_name, email, hashedPassword]);
        const user = newUser.rows[0];
        const role = user.role || 'USER';
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role }, jwt_1.jwtSecret, { expiresIn: '1d' });
        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: { id: user.id, full_name: user.full_name, email: user.email, role }
        });
    }
    catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        const result = await db_1.pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }
        const user = result.rows[0];
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }
        const role = user.role || 'USER';
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role }, jwt_1.jwtSecret, { expiresIn: '1d' });
        res.json({
            message: 'Login successful',
            token,
            user: { id: user.id, full_name: user.full_name, email: user.email, role }
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map