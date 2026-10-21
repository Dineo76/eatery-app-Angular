"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
const authMiddleware_1 = require("../middleware/authMiddleware"); // Your JWT verify middleware
const router = (0, express_1.Router)();
// Protect all cart endpoints with authentication
router.get('/', authMiddleware_1.authenticateToken, cartController_1.getCart);
router.post('/', authMiddleware_1.authenticateToken, cartController_1.addToCart);
router.delete('/:itemId', authMiddleware_1.authenticateToken, cartController_1.removeFromCart);
exports.default = router;
//# sourceMappingURL=cartRoutes.js.map