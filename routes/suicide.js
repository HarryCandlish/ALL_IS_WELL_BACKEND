const express = require("express");
const router = express.Router();

const { getSuicide } = require("../db/philosophy");

router.get("/", (req, res) => {
  getSuicide()
    .then(suicide => {
      res.json(suicide);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
