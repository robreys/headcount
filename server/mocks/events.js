module.exports = function(app) {
  var express = require('express');
  var eventsRouter = express.Router();
  eventsRouter.get('/:id', function(req, res) {
  	var e = data[req.params.id];
    res.send({
    	"event": e
    });
  });
  app.use('/api/events', eventsRouter);
};

var data = [
	{
		"id": "0",
		"name": 'Swagmeet',
		"date": "2014-11-10",
		"location": "swagville",
		"count": "0",
		"participants": [],
		"admin": "0"
	},
	{
		"id": "1",
		"name": 'swiggity swagg',
		"date": "2014-13-10",
		"location": "swaglot",
		"count": "9001",
		"participants": [],
		"admin": "0"
	}  	
];
