const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const users = {
    one: {
        phone: '6479665106',
        password:'uganum1'
    }
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/login', (req, res) => {
    if((req.body.phone === users.one.phone) && (req.body.password === users.one.password)) {
        console.log(req.body.phone === users.one.phone, req.body.password === users.one.password)
        res.json({success: true})
    } else {
        res.json({success: false})
    }
});

app.listen(1800)