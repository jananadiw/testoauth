var express = require('express');
var app = express();
var path = require('path');

app.listen(3000);
console.log('server running on ');


// Router Setting
let authorizationServerRouter = require('./authorizationServer');
app.use('/server', authorizationServerRouter);
let clientRouter = require('./client');
app.use('/client', clientRouter);
let protectedResourceRouter = require('./protectedResource');
app.use('/protectedResource', protectedResourceRouter);

module.exports = app;