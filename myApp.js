let express = require('express');
let app = express();

const path = __dirname + '/views/index.html'

app.get("/", function (req, res) {
    res.sendFile(path)
})



































module.exports = app;
