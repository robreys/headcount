import DS from "ember-data";

export default DS.Model.extend({
	group_id: DS.belongsTo('group'),
	first_name: DS.attr('string'),
	last_name: DS.attr('string'),
	fullName: function() {
		return this.get('first_name') + ' ' + this.get('last_name');
	}.property('first_name', 'last_name'),
	email: DS.attr('string')
});