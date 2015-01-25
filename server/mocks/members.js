module.exports = function(app) {
  var express = require('express');
  var membersRouter = express.Router();
  membersRouter.get('/:id', function(req, res) {
    res.send({"member":{}});
  });
  app.use('/api/members', membersRouter);
};
