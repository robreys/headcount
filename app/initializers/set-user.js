import Ember from 'ember';

export default {
  name: 'set-user',
  initialize: function(container, application) {
    var User = Ember.Object.extend({
      currUser: null,
      currID: null
    });
    application.register('session:current', User);
    application.inject('route', 'session', 'session:current');
    application.inject('controller', 'session', 'session:current');
  }
};