const express = require('express');
const app = express();
const favoredAccountRoutes = require('./src/routes/favoredAccountRoutes');

app.use(favoredAccountRoutes);

app.listen(process.env.NODE_PORT, () => console.log('Listening nodejs Server'));