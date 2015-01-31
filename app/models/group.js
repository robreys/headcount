import DS from "ember-data";

export default DS.Model.extend({
	user_id: DS.belongsTo('user'),
	name: DS.attr('string')
});