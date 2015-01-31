import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('dashboard', {path: 'dash/:id'}, function() {
		this.route('events');
		this.route('members');
		//this.route('createEvent');
		this.route('create_event');
		this.route('create_member');
	});
	this.resource('event', {path: 'event/:id'}, function() {
		this.route('statistics', {path: 'stats'});
		this.route('launch');
	});
	//this.resource('launch', {path: 'event/launch/:id'});
});

export default Router;
