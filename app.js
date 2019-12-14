const express = require('express');
const morgan = require('morgan');

const moveRouter = require('./routes/moveRouter');
const characterRouter = require('./routes/characterRouter');
const oracleRouter = require('./routes/oracleRouter');
// const trackRouter = require('./routes/trackRoutes');
// const logRouter = require('./routes/logRoutes');

// const userRouter = require('./routes/userRoutes');
// const campaignRouter = require('./routes/campaignRoutes');

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// ROUTES
app.use('/api/v1/moves', moveRouter);
app.use('/api/v1/characters', characterRouter);
app.use('/api/v1/oracles', oracleRouter);
// app.use('api/v1/tracks', trackRouter);
// app.use('api/v1/logs', logRouter);

module.exports = app;
