// Dependencies
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
            const cors = require('cors');
const logger = require('morgan');

// Routes

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Apply Routes

module.exports = { app };
