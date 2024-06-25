"use strict"; //다른 파일에서 서로 연결해주는 것

//모듈
const express = require("express");
const app = express();
const mongose = require("mongoose");
//라우팅
const  MONGODB = process.env;
const home = require("./public/routes/home")
app.use(express.static('public'));

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

mongose
  .connect(MONGODB, { useNewUrlParsaer: true, useUnifiedToplogy: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

module.exports = app;