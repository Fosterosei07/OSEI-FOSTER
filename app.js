const express = require('express');
const dotenv = require('dotenv');

dotenv.config()

const port = process.env.port || 7007

const app = express()




app.get('/', (req, res) =>{
    res.send('GOD IS THE GREATEST')
})

app.listen(port, () => {
    console.log(`Server is connected on http://localhost:${port}`)
})