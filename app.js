const express = require('express');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const routes = require('./routes/userRoute');
const controller = require('./controller/userController');
const ejs = require('ejs')

dotenv.config()

const port = process.env.port || 7007

const app = express()

// Setting view engine
app.set('view engine','ejs');
app.use(expressLayouts);


//middleware
app.use('/', userRoute);
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.send('GOD IS THE GREATEST')
})

app.listen(port, () => {
    try{
    console.log(`Server is connected on http://localhost:${port}`)
    }catch(error){
        console.log(error)
    }
})