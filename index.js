//requiring express
const express = require('express');

//initializing the express app
const app = express();

//specifying port to listen on localhost:9000
const port = 9000;

//defining API
app.get('/', (req, res) => {
    res.send("Hello from the express server! :)");
});

//running express http server on specified port
app.listen(port, () => {
    console.log("Listening on port", port);
});