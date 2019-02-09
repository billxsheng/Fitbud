const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const users = [['6479665106', 'uganum1']]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post('/login', (req, res) => {
    users.map(users, (user) => {
        if(user[0] === req.phone && user[1] === req.password) {
            res.json({success: true})
        } else {
            res.json({success: false})
        }
    })
});

app.listen(1800)