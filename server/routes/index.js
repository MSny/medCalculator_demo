const overviewRoutes = require('./overview');

function init(server, nextApp) {
  server.get('/', (req, res) => {
    res.redirect('/overview');
  });

  server.use(
    `/overview`, overviewRoutes(nextApp)
  );
  

  server.get('*', (req, res) => {
    const handleRequest = nextApp.getRequestHandler();
    return handleRequest(req, res);
  });
}

module.exports = {
  init,
};
