const express = require('express')
const app = express()
const port = 8080
var os = require('os');

app.get('/', (req, res) => res.send('Hello World! from '+os.hostname()))

app.listen(port, () => console.log(`Example app listening on port ${port}! from ${os.hostname()}`))
