const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const timeout = require('connect-timeout');
const compression = require('compression')

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression())
app.use(timeout('5s'))
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', api);


app.use(middlewares.haltOnTimedout);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
