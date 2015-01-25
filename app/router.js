import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('dashboard', {path: 'dash/:id'});
	this.resource('event', {path: 'event/:id'});
	this.resource('launch', {path: 'event/launch/:id'});
});

export default Router;
