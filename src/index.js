const app = require('express')();
var path = require('path');
var cowsay = require("cowsay");

var cow_msg = cowsay.say({
    text: process.env.cowsay_msg || "Hello",
    e: "oO",
    T: "U "
})

app.get('/', (req, res) =>
    // res.json({ message: cow_msg })
    res.send('<pre>' + cow_msg + '</pre>')
);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
    console.log(cow_msg);
});