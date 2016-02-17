import DS from 'ember-data';

export default DS.Model.extend({
  transactions: DS.hasMany('transaction', { async: true}),
  name: DS.attr('string'),
  description: DS.attr('string')
});
