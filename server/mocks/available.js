module.exports = function(app) {
  var express = require('express');
  var availableRouter = express.Router();
  availableRouter.get('/:id', function(req, res) {
  	if (req.params.id == "0" || req.params.id == "1")
  		res.send({"available":"no"});
  	else
    	res.send({"available":"yes"});
  });
  app.use('/api/available', availableRouter);
};
