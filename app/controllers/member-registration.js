import Ember from "ember";
 
export default Ember.ObjectController.extend({
  actions: {
  	//primary registration action
    submit: function() {
    	//TODO: validate input
			var member = this.store.createRecord('member', {
				id: this.get('memberId'),
				firstName: this.get('memberFName'),
				lastName: this.get('memberLName'),
				email: this.get('memberEmail'),
				major: this.get('memberMajor'),
				class: this.get('memberClass')
			});
			this.store.find('user', this.session.currID).then(function(user) {
				member.set('admin', user);
			});
			this.get('participants').pushObject(member);
			alert("Welcome " + member.get('fullName') + "!");
			//clean up
			this.set('memberId', '').set('memberFName', '').set('memberLName', '')
				.set('memberEmail', '').set('memberMajor', '').set('memberClass', '');  	
      return this.send('closeModal');
    },
    close: function() {
      return this.send('closeModal');
    }
  }	
});