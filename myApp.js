require('dotenv').config();
const bodyParser = require("body-parser")
let express = require('express');
let app = express();

const path = __dirname + '/views/index.html';
const absoluteAssetsPath = __dirname + "/public";

express.static(absoluteAssetsPath);

app.use("/public", express.static(absoluteAssetsPath))
app.use(bodyParser.urlencoded({ extended: false }))

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
app.get("/now", function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.send({ time: req.time });
})
// Get Route Parameter Input from the Client
app.get("/:word/echo", function (req, res) {
    res.send({ echo: req.params.word })
})
// Get Query Parameter Input from the Client
app.route("/name").get((req, res) => {
    const { first, last } = req.query
    const name = first + " " + last
    res.json({ name: name })
}).post((req, res) => {
    const{first,last} = req.body;
    const name = first + " " + last
    res.json({name:name})
})



































module.exports = app;
