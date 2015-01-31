import DS from "ember-data";

export default DS.Model.extend({
	group_id: DS.belongsTo('group'),
	name: DS.attr('string'),
	start_date: DS.attr('date'),
	end_date: DS.attr('date'),
	location: DS.attr('string'),
	participants: DS.hasMany('member')
});
