import Ember from "ember";

export default Ember.Route.extend({
	actions: {
		//opens a modal dialog; params[0]:template; params[1]:model
		openModal: function(params) {
			this.controllerFor(params[0]).set('model', params[1]);
			this.render(params[0], {
				into: 'application',
				outlet: 'modal',
			});
		},
		closeModal: function(options) {
			this.disconnectOutlet({
				outlet: 'modal',
				parentView: 'application'
			});
			if(options && options.transitionTo) {
				this.transitionTo(options.transitionTo[0], options.transitionTo[1]);
			}
		}
	}
});