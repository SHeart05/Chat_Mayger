/**
 * Created by skerz on 02.09.16.
 */
'use strict';

global.__basedir = __dirname;

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(express.static( __basedir + '/app'));
app.use(express.static( __basedir + '/node_modules'));


app.get('*', function (req, res) {
    res.sendfile(__basedir + '/index.html');
});

app.listen(process.env.PORT || 8080, function () {
    console.log('Server listening at http://localhost fuck you');
})
