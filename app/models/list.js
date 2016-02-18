import DS from 'ember-data';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
});

export default DS.Model.extend(Validations,{
  transactions: DS.hasMany('transaction', {async: true}),
  name: DS.attr('string'),
  description: DS.attr('string')
});
