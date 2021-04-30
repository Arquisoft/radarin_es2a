var express = require("express");
var app = express();
const path = require("path");
var port =  process.env.PORT || 3000;
app.use(express.static("build"));
app.listen(port);
app.get("*" , (req, res) => {
    res.sendFile(path.join(__dirname,"build","index.html")); 
});