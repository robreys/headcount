import DS from "ember-data";

export default DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	major: DS.attr('string'),
	class: DS.attr('string'),
	admin: DS.belongsTo('user')
});