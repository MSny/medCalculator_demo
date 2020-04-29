const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

// require('../aws-sdk-setup'); /* eslint-disable global-require */
const routes = require('../../routes');
const https = require('../../middlewares/https');

function start(app) {
  const server = express();
  const PORT = process.env.PORT || 3000;
  const sessionOptions = require('../session');

  // middlewares
  // server.use(compression());
  server.use(helmet());
  server.use(morgan('short'));
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(bodyParser.text());
  server.use(session(sessionOptions));
  server.use(https);

  // Node http.server settings
  // Ensure all inactive connections are terminated by the CLB (Classic Load Balancer), by setting this a few seconds higher than the CLB idle timeout
  server.keepAliveTimeout = 61 * 1000;
  // Fixes 5xx errors in Node v10.15.2 and newer for servers that set keepAliveTimeout
  // Issue Detail: https://github.com/nodejs/node/issues/27363
  server.headersTimeout = 65 * 1000;

  // pull in server routes
  routes.init(server, app);

  server.listen(PORT, err => {
    if (err) throw err;
    console.info(`APPLICATION STARTED LISTENING ON PORT=${PORT}`);
  });
}

module.exports = {
  start,
};
