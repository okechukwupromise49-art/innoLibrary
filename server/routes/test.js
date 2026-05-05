const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => {
  console.log("TEST ROUTE HIT");
  res.send("API HEALTH WORKING ✅");
});

router.get("/ping", (req, res) => {
  res.send("PING OK");
});

module.exports = router;