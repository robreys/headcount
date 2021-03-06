module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  usersRouter.get('/:id', function(req, res) {
    res.send({
    	"user": 
		    {
		    	"id": "0",
		  		"first_name": 'Swag',
		  		"last_name": 'Lorde',
		  		"recentEvents": ["0", "1"],
		  		"topMembers": ["0", "1"]
	    	},
    	"event": [
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
    	],
    	"member": [
				{
					"id": "0",
					"first_name": 'Baby',
					"last_name": 'Swag',
					"email": 'bab@swag.com',
					"major": 'Swag Engineering',
					"class": 'Swag Senior'
				},
				{
					"id": "1",
					"first_name": 'Swag',
					"last_name": 'Jr',
					"email": 'jr@swag.com',
					"major": 'Swag Engineering',
					"class": 'Swag Senior'
				}
    	]
  	});
  });
  app.use('/api/users', usersRouter);
};


