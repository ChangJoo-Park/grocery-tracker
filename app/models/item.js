import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  quantity: DS.attr('number'),
  transaction: DS.belongsTo('transaction'),

  plural_total_price: Ember.computed('price', 'quantity', function(){
    let price = this.get('price');
    let quantity = this.get('quantity');
    let total_price = price * quantity;
    total_price = total_price.toFixed(2);
    return `${price} x ${quantity} = ${total_price}`;
  })
});
