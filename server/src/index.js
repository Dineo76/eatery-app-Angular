"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)({ origin: 'http://localhost:4200', credentials: true }));
app.use(express_1.default.json());
// Routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/orders', orderRoutes_1.default);
app.use('/api/cart', cartRoutes_1.default);
// Health Check Route
app.get('/api/health', async (req, res) => {
    try {
        const dbRes = await db_1.pool.query('SELECT NOW()');
        res.json({ message: 'Server is running', dbTime: dbRes.rows[0].now });
    }
    catch (err) {
        res.status(500).json({ error: 'Database connection failed' });
    }
});
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    try {
        const res = await db_1.pool.query('SELECT NOW()');
        console.log('Connected to PostgreSQL database at:', res.rows[0].now);
    }
    catch (err) {
        console.error('❌ PostgreSQL Connection Error:', err.message || err);
    }
});
//# sourceMappingURL=index.js.map