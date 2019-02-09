const express = require('express');

const app = express();

const users = [['billsheng', 'uganum1']]

app.post('signup', (req, res) => {
    users.map(users, (user) => {
        if(user[0] === req.username && user[1] === req.password) {
            
        } else {
            
        }
    })
});

app.listen(1800)