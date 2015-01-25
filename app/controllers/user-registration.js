import Ember from "ember";
 
export default Ember.ObjectController.extend({
  actions: {
  	//primary registration action
    submit: function() {
    	//TODO: validate input
			var user = this.store.createRecord('user', {
				//we want to query the server here to determine next available id
				id: Math.floor(Math.random()*101),
				firstName: this.get('userFName'),
				lastName: this.get('userLName'),
			});
			alert("Successfully registered. Welcome " + user.get('fullName') + "!");
			//clean up
			this.set('userFName', '').set('userLName', '');
      return this.send('closeModal', {transitionTo: ['dashboard', user.get('id')]});
    },
    close: function() {
      return this.send('closeModal');
    }
  }	
});