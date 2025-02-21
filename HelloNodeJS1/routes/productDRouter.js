const express = require("express");
const ProductDetail = require("../models/productDetail");

const router = express.Router();


router.get("/:productId", async (req, res) => {
    try {
        const productDetail = await ProductDetail.findOne({ productId: req.params.productId });
        if (!productDetail) {
            return res.status(404).json({ message: "Product details not found" });
        }
        res.json(productDetail);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server!", error });
    }
});

router.post("/add", async (req, res) => {
    try {
        const { productId, specifications, stock, manufacturer, warranty, additionalInfo } = req.body;
        const newProductDetail = new ProductDetail({ productId, specifications, stock, manufacturer, warranty, additionalInfo });
        await newProductDetail.save();
        res.status(201).json(newProductDetail);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server!", error });
    }
});

// Cập nhật chi tiết sản phẩm
router.put("/:productId", async (req, res) => {
    try {
        const updatedProductDetail = await ProductDetail.findOneAndUpdate(
            { productId: req.params.productId },
            req.body,
            { new: true }
        );
        if (!updatedProductDetail) {
            return res.status(404).json({ message: "Product details not found" });
        }
        res.json(updatedProductDetail);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server!", error });
    }
});


router.delete("/:productId", async (req, res) => {
    try {
        await ProductDetail.findOneAndDelete({ productId: req.params.productId });
        res.json({ message: "Product details deleted" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server!", error });
    }
});

module.exports = router;
