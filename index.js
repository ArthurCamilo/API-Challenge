const express = require('express');
const bodyparser = require('body-parser');
const bankAccountRoutes = require('./src/routes/bankAccountRoutes');
const app = express();
require('dotenv');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use('/', bankAccountRoutes);

app.listen(process.env.NODE_PORT || 3000, () => console.log('Listening server in port %s', process.env.NODE_PORT || 3000));