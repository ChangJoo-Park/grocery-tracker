import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  transactions: DS.hasMany('transaction', {async: true}),
  name: DS.attr('string'),
  description: DS.attr('string')
});
