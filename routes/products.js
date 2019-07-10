const express = require("express");
const router = express.Router();

const { getProducts, getOneProduct } = require("../db/products");

router.get("/", (req, res) => {
  getProducts()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

router.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  getOneProduct(productId)
    .then(product => {
      res.json(product);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});
module.exports = router;
