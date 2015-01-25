import Ember from "ember";

export default Ember.ObjectController.extend({
	actions: {
		//primary sign-in action
		submit: function() {
			var self = this;
			//verifies if member is registered user
			Ember.$.get("/api/available/" + self.get('memberId')).then(function(resp) {
				self.incrementProperty('count');
				//renders member registration modal if not registered
				if (resp.available === 'yes') {
					return self.send('openModal', ['member-registration', self.get('model')]);
				}
				else {
					self.store.find('member', self.get('memberId')).then(function(mem) {
						self.get('participants').pushObject(mem);
						alert('Hello again ' + mem.get('fullName') + '!');
					});
				}
			});
		}
	}
});

