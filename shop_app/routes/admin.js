import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// the full route is ==> /admin/add-product
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// the full route is ==> /admin/product
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
