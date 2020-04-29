const { Router } = require('express');
const overviewController = require('../../controllers/overview');

const router = Router();

module.exports = (nextApp) => {
  router.get('/', overviewController(nextApp));

  return router;
};