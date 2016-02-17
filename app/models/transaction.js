import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  items: DS.hasMany('item'),
  list: DS.belongsTo('list'),
  when: DS.attr('date'),
  place: DS.attr('string'),

  colloquial_when: Ember.computed('when', function(){
    let when = moment(this.get('when')).format('LL');
    return `on ${when}`;
  })

});
