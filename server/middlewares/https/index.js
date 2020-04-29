module.exports = (req, res, next) => {
    if (
      process.env.NODE_ENV === 'production' &&
      req.header('X-Forwarded-Proto') === 'http'
    ) {
      const { hostname, originalUrl } = req;
      return res.redirect(301, `https://${hostname}${originalUrl}`);
    }
    return next();
  };