const express = require('express')

const app = express();

const port = 3000;

app.listen(port, ()=> {
    console.log("Running server on ", port);
});

app.get('/hello', (req, res) => {
    res.send("Hello World");
});

