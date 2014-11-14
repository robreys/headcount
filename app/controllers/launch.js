import Ember from "ember";

export default Ember.ObjectController.extend({
	actions: {
		//checks if registered member, transitions to registration if not
		//if registered, increments count
		submit: function() {
			var self = this;
			var count = this.incrementProperty('count');
			var memId = this.get('memberId');
			var store = this.store;
			var currId = this.session.currID;
			var member = null;
			Ember.$.get("http://localhost:4200/api/available/" + memId).then(function(resp) {
				if (resp.available === 'yes') {
					member = store.createRecord('member', {
						id: memId,
						name: "Member" + count
					});
					store.find('user', currId).then(function(user) {
						member.set('admin', user);
					});
					alert("hello " + member.get('name'));
				}
				else {
					member = store.find('member', memId).then(function(mem) {
						alert('hello again ' + mem.get('name'));
					});
				}
				self.get('participants').then(function(part) {
					return part.pushObject(member);
				});
			});
		}
	}
});

