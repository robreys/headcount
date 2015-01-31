import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
  	//primary registration action
    submit: function() {
    	//TODO: validate input
			var evento = this.store.createRecord('event', {
				//we want to query the server here to determine next available id
				id: Math.floor(Math.random()*101),
				name: this.get('eventName'),
				date: new Date(this.get('eventDate') + ' ' + this.get('eventTime')).toISOString(),
				location: this.get('eventLocation')
			});
			this.store.find('user', this.session.currID).then(function(user) {
				evento.set('admin', user);
			});
			alert("Event Created: " + evento.get('name'));
			//clean up
			this.set('eventId', null).set('eventName', null).set('eventDate', null)
				.set('eventTime', null).set('eventLocation', null);  	
      return this.send('closeModal');
    }
  }	
});