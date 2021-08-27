"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const products = [{ id: 1, name: 'lapiz', price: 200, description: 'lorem', code: 2021, stock: 45 }];
class Product {
    getProducts(req, res) {
        const { id } = req.params;
        if (id) {
            const prod = products.find((p) => p.id === Number(id));
            if (!prod) {
                return res.status(404).json({
                    msg: 'Product not found'
                });
            }
            return res.json({
                data: prod
            });
        }
        res.json({ data: products });
    }
    addProduct(req, res) {
        const { name, description, code, price, stock } = req.body;
        console.log(req.body);
        if (!name || !price || !description || !code || !stock) {
            return res.status(400).json({
                msg: 'Invalid fields'
            });
        }
        const prodItem = {
            id: products.length + 1,
            name,
            price: Number(price),
            description,
            code: Number(code),
            stock: Number(stock)
        };
        products.push(prodItem);
    }
}
exports.productController = new Product();
