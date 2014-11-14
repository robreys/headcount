import DS from "ember-data";

export default DS.Model.extend({
	name: DS.attr('string'),
	recentEvents: DS.hasMany('event'),
	topMembers: DS.hasMany('member')
});
