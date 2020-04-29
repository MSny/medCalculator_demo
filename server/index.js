const next = require('next');
const { start } = require('./config/server');
// const connectToDB = require('./config/database');

const app = next({ dir: './app' });

app
  .prepare()
//   .then(connectToDB)
  .then(() => start(app))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
