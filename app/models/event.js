import DS from "ember-data";

export default DS.Model.extend({
	name: DS.attr('string'),
	date: DS.attr('date'),
	location: DS.attr('string'),
	count: DS.attr('number'),
	participants: DS.hasMany('member'),
	admin: DS.belongsTo('user')
});