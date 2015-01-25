import DS from "ember-data";

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}.property('firstName', 'lastName'),
	email: DS.attr('string'),
	major: DS.attr('string'),
	class: DS.attr('string'),
	attended: DS.hasMany('event'),
	score: function() {
		return this.get('attended').length * 10;
	}.property('attended'),
	admin: DS.belongsTo('user')
});