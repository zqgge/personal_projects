const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const customerRouter = require('./routes/customer');
const actionsRouter = require('./routes/actions');
const loginRouter = require('./routes/login');
const cardRouter = require('./routes/card');


const app = express();

const basicAuth = require('express-basic-auth');
app.use(basicAuth({users: { 'automaatti': 'ryhma04' }}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/customer', customerRouter);
app.use('/actions', actionsRouter);
app.use('/login', loginRouter);
app.use('/card', cardRouter);

module.exports = app;