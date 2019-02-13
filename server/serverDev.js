import express from 'express';
import bodyParser from 'body-parser';

import config from './common/config';
const log = require('./common/log')(module);
import sessionStore from './common/sessionStore';
import session from 'express-session';
import handleRequest from './app';

import renderHtml from './common/functions/renderHtml';

// ****************** Import routes *************

//***********************************************

export const app = express();
export const server = require('http').Server(app);

app.use(bodyParser.json());
app.use(express.static('public/static'));
app.use(session({
  secret: config.session.secret,
  saveUninitialized: false,
  resave: true,
  key: config.session.key,
  cookie: config.session.cookie,
  store: sessionStore
}));
app.use(handleRequest);

//******************************** Routes ***************************

app.get('/', (req, res) => {
  res.send(renderHtml(req, res))
});
//
// app.get('*', (req, res) => {
//   res.send(renderHtml(req, <NotFoundPage />))
// });

server.listen(config.PORT, () => console.log(`Server run on ${config.PORT} port`));

//******************************** Uncaught Exception ***************************

process.on('uncaughtException', function (err) {
  log.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  log.error(err.stack);
  process.exit(1);
});






