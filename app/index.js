const express = require('express');
const app = express()

const port = 3001

app.get('/', (req, res) => {
    return res.send("Hello world")
})

app.listen(port, () => console.log(`App listen on ${port}`))