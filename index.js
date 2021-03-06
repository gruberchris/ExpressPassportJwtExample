const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jwt-simple");
const auth = require("./auth.js")();
const users = require("./users.js");
const cfg = require("./config.js");
const app = express();

app.use(bodyParser.json());
app.use(auth.initialize());

app.get("/", function(req, res) {
    res.json({
        status: "Hello, World!"
    });
});

app.get("/user", auth.authenticate(), function(req, res) {
    console.log(req.user.id);
    console.log(JSON.stringify(users[req.user.id - 1]));
    res.json(users[req.user.id - 1]);
});

app.post("/token", function(req, res) {
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
        var user = users.find(function(u) {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, cfg.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

app.listen(3000, function() {
    console.log("ExpressPassportJwtExample Api listening on port 3000...");
});

module.exports = app;