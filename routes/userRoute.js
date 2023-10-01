const express = require('express');
const {home} = require('../controller/userController')

const app = express.Router()

app.get('/', home)


module.exports=app