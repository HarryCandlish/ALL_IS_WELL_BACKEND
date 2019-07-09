const express = require("express");
const router = express.Router();

const { getProducts } = require("../db/products");

router.get("/", (req, res) => {
  getProducts()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
