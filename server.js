'use strict'

const express = require('express');

const server = express();

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => {
console.log('hello');
});