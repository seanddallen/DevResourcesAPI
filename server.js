// Dependencies
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const { Model } = require('objection');
const knexInstance = require('./db/knex');

const port = process.env.PORT || 8000;

// Routes
const users = require('./routes/users');
const resources = require('./routes/resources');
const reviews = require('./routes/reviews');
const comments = require('./routes/comments');
const favorites = require('./routes/favorites');
const tags = require('./routes/tags');
const votes = require('./routes/votes');

Model.knex(knexInstance);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Apply Routes
app.use('/', users);
app.use('/', resources);
app.use('/', reviews);
app.use('/', comments);
app.use('/', favorites);
app.use('/', tags);
app.use('/', votes);

module.exports = { app };
