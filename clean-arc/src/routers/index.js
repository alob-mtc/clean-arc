// Routers

// not-found
const notFound = require("../controllers/not-found");
const makeCallBack = require("../express-callback");

// api root
const apiRoot = process.env.API_ROOT;

module.exports = function(app) {
   //* app.use(`${apiRoot}/endpoint`, Router);
  // not-found
  app.use(makeCallBack(notFound));
};
