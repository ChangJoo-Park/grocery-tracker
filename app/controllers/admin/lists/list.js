import Ember from 'ember';
import _ from 'lodash';
import faker from 'faker';

export default Ember.Controller.extend({
  numOfTransactions: 0,
  actions: {
    addTransactions() {
      let numOfTransactions = this.get('numOfTransactions');
      if(numOfTransactions === 0) {
        return;
      }

      let list = this.get('model');
      for (var i = 0; i < numOfTransactions; i++) {
        let transaction = this.store.createRecord('transaction', {
            list: list,
            place: faker.address.country(),
            when: new Date()
        });
        transaction.save().then((response)=>{
          Ember.Logger.info("INFO");
          Ember.Logger.info(response);
        }).catch((errors)=>{
          Ember.Logger.error("ERROR");
          Ember.Logger.error(errors);
        });
      }
      list.save();
      this.set('numOfTransactions', 0);
    }
  }
});
