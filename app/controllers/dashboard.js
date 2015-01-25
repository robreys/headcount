import Ember from "ember";

export default Ember.ObjectController.extend({
	actions: {
		createEvent: function() {
			return this.send('openModal', ['event-creation', this.get('model')]);
		}
	}
});