"use strict"; //다른 파일에서 서로 연결해주는 것

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/index");
});

router.get("/login", (req, res) => {
  res.render("home/login");
});

module.exports = router