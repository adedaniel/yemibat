var express = require("express");
var app = express();
const path = require("path");
app.use("/static/", express.static(path.join(__dirname, "/static/")));
var port = process.env.PORT || 7000;

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get(`/about`, (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get(`/contact`, (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.listen(port, () => {
  console.log("Express app listening on port " + port);
});
