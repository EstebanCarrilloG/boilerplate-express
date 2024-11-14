require('dotenv').config();
let express = require('express');
let app = express();

const path = __dirname + '/views/index.html';
const absoluteAssetsPath = __dirname + "/public";

express.static(absoluteAssetsPath);

app.use("/public", express.static(absoluteAssetsPath))


app.use(function (req, res, next) {
    const { ip, method, path } = req
    console.log(`${method} ${path} - ${ip}`);
    next();

})

app.get("/", function (req, res) {
    res.sendFile(path)
})
app.get("/json", function (req, res) {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") message = message.toUpperCase();
    res.json({ message: message })
})



































module.exports = app;
