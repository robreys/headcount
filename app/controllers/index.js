import Ember from "ember";

export default Ember.ObjectController.extend({
	//checks if registered user, transitions to registration if not
	//if registered, transitions to dash
	actions: {
		login: function() {
			this.transitionToRoute('dashboard', 0);
		}
	}
});