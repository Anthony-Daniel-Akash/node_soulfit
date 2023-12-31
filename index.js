const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('port', process.env.PORT || 3002);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/fitzz", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "fitzz.html"));
});

app.get("/gear", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "gear.html"));
});

app.get("/ridepopup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ridepopup.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});

app.get("/soul", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "soul.html"));
});

app.get("/spirit", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "spirit.html"));
});

app.get("/cheackout", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cheackout.html"));
});

app.get("/bot", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bot.html"));
});
app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});
