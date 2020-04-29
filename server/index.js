const next = require('next');
const { start } = require('./config/server');
const { connect } = require('./db');

const app = next({ dir: './app' });

app
  .prepare()
  .then(connect())
  .then(() => start(app))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
