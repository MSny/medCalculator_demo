const { Router } = require('express');
const { view, create } = require('../../controllers/overview');

const router = Router();

module.exports = (nextApp) => {
  router.get('/', view(nextApp));
  router.post('/', create);

  return router;
};