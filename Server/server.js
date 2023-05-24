require('rootpath')();
const path = require('path')
var express = require("express");
var app = express();
const bodyParser = require('body-parser');
require('dotenv').config({ path: __dirname + '/.env' });

const port = 3001
var http = require("http");
var server = http.createServer(app).listen(port);

console.log("Listening on Port:", port);
server.on('listening', function () {})
var cors = require('cors');
var whitelist = [process.env.domain || 'http://127.0.0.1:3000']
app.use(cors({
    origin: function (origin, callback) {
        callback(null, true)
    }
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/', require('./src/controller'));
app.use('/media/', express.static(path.join(__dirname, "media")));

