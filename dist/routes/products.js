"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const router = express_1.Router();
router.get('/', products_1.productController.getProducts);
router.get('/:id', products_1.productController.getProducts);
router.get('/', products_1.productController.addProduct);
exports.default = router;
