const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//home page route
app.get("/", (req, res) => {
  return res.send({
    error: true,
    type: "ทดสอบ",
    message: "ยินดีต้อนรับสู่ Restful crud api with nodejs, express, Mysql",
    written_by: "dew",
    published_on: "https://www.facebook.com/narongritza0011/",
  });
});

app.listen(3002, () => {
  console.log("node  running is port 3002");
});
