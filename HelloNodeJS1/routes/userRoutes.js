const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");

const router = express.Router();
const SECRET_KEY = "21062005";

// 🟢 API Test
router.get("/test", (req, res) => {
    res.send("API đang hoạt động!");
});
// 🟢 Lấy danh sách tất cả người dùng
router.get("/list", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
});
// 🟢 Đăng ký (Không yêu cầu avatar)
router.post("/register", async (req, res) => {
  try {
      console.log("👉 Nhận request đăng ký...");
      console.log("📩 Body:", req.body);

      const { name, email, password } = req.body;

      if (!name || !email || !password) {
          console.log("⚠️ Thiếu thông tin đăng ký!");
          return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
          console.log("❌ Email đã tồn tại!");
          return res.status(400).json({ message: "Email đã được sử dụng" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });

      await newUser.save();
      console.log("✅ Đăng ký thành công:", newUser);

      res.status(201).json({ message: "Đăng ký thành công", user: newUser });
  } catch (error) {
      console.error("🚨 Lỗi server:", error);
      res.status(500).json({ message: "Lỗi server", error: error.message });
  }
});

// 🟢 Đăng nhập
// 🟢 Đăng nhập
router.post("/login", async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) return res.status(400).json({ message: "Email không tồn tại" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Mật khẩu không đúng" });

      const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

      res.json({ message: "Đăng nhập thành công", token, user });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi server" });
  }
});


// 🟢 Lấy thông tin người dùng theo ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "Người dùng không tồn tại" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
});

// 🟢 Xóa người dùng theo ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "Không tìm thấy người dùng" });

        res.json({ message: "Xóa người dùng thành công", user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
});

module.exports = router;
