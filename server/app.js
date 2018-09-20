const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();

//plugins
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use('/uploads', express.static('uploads'));


//mongodb
const db = require('./config/database');
// Connect to MongoDB
mongoose
    .connect(db.url)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//development 
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('morgan enabled')
}

//routes
require('./routes/api')(app);


//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type , Accept , Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Controle-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
})


//error handling page / middleware
app.use((req, res, next) => {
    const err = new Error('not found')
    err.status = 404
    next(err)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})

module.exports = app