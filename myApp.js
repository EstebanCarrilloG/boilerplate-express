let express = require('express');
let app = express();

const path = __dirname + '/views/index.html';
const absoluteAssetsPath = __dirname + "/public";

express.static(absoluteAssetsPath);

app.use("/public", express.static(absoluteAssetsPath))
app.get("/", function (req, res) {
    res.sendFile(path)
})



































module.exports = app;
