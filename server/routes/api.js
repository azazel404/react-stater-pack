const express = require('express');
const genres = require('../controller/genres');


module.exports = function (app) {
    app.use(express.json());
    app.use('/api/genres', genres);
}