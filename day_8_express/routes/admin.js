import express from "express";

const router = express.Router();

// the full route is ==> /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">add</button></form>`
  );
});

// the full route is ==> /admin/product
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
