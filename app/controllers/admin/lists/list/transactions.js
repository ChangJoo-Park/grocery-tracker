import Ember from 'ember';
import _ from 'lodash';
import faker from 'faker';

export default Ember.Controller.extend({
  numOfItems: 0,
  actions: {
    addItems() {
      let numOfItems = this.get('numOfItems');
      if(numOfItems === 0){
        return;
      }
      Ember.Logger.info(numOfItems);
      Ember.Logger.info("EMPTY");
      let transaction = this.get('model');

      for (var i = 0; i < numOfItems; i++) {
        let item = this.store.createRecord('item', {
            transaction: transaction,
            name: faker.commerce.productName(),
            price: _.random(1.0, 100.0),
            quantity: _.random(1, 10)
        });
        item.save().then((response)=>{
          Ember.Logger.info("INFO");
          Ember.Logger.info(response);
        }).catch((errors)=>{
          Ember.Logger.error("ERROR");
          Ember.Logger.error(errors);
        });
      }
      transaction.save();
      this.set('numOfItems', 0);
    }
  }
});
