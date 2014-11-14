import Ember from "ember";

export default Ember.Route.extend({
	afterModel: function(resolvedModel) {
		this.set('session.currUser', resolvedModel.name);
		this.set('session.currID', resolvedModel.id);
	},
  model: function(params) {
    return this.store.find('user', params.id);
  }
});