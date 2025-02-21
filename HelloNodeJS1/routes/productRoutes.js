const express = require("express");
const Product = require("../models/product");

const router = express.Router();

const BASE_URL = "http://172.16.53.132:4000";

router.get("/test", (req, res) => {
    res.send("API đang hoạt động!");
});
// Lấy danh sách sản phẩm
router.get("/list", async (req, res) => {
    try {
        const products = await Product.find();
        const updatedProducts = products.map(product => ({
            ...product._doc,
            image: product.image.startsWith("http")
                ? product.image  
                : `${BASE_URL}/images/${product.image}`  
        }));
        res.json(updatedProducts);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server!", error });
    }
});

router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});


router.post("/add", async (req, res) => {
    let { name, description, price, image, rating, category } = req.body;

    if (!image.startsWith("http")) {
        image = `${BASE_URL}/images/${image}`;
    }

    const newProduct = new Product({ name, description, price, image, rating, category });
    await newProduct.save();
    res.status(201).json(newProduct);
});


router.put("/:id", async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
});


router.delete("/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
});

module.exports = router;
