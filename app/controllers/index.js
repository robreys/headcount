import Ember from "ember";

export default Ember.ObjectController.extend({
	//checks if registered user, transitions to registration if not
	//if registered, transitions to dash
	register: false,
	actions: {
		login: function() {
			this.transitionToRoute('dashboard', 0);
		},
		register: function() {
			if (!this.get('register'))
				this.set('register', true);
			else {
				var user = this.store.createRecord('user', {
					//we want to query the server here to determine next available id
					id: Math.floor(Math.random()*101),
					firstName: this.get('userFName'),
					lastName: this.get('userLName'),
				});
				//need to notify user of account creation
				//alert("Successfully registered. Welcome " + user.get('fullName') + "!");
				//clean up
				this.set('userFName', '').set('userLName', '');
	      this.transitionToRoute('dashboard', user.get('id'));				
			}
			//return this.send('openModal', ['user-registration', this.get('model')]);
		}
	}
});