
module.exports = nextApp => async (req, res, next) => {
  try {
    // get user and all the data needed on the overview page
    nextApp.render(req, res, '/overview', {});
  } catch (err) {
    next(err);
  }
};