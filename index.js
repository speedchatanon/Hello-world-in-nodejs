const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = 9000
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})