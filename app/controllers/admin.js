import Ember from 'ember';
import _ from 'lodash';
import faker from 'faker';

export default Ember.Controller.extend({
  numOfList: 5,
  numOfTransaction: 3,
  numOfItem: 10,
  actions: {
    createDummyDatas() {
      Ember.Logger.info("CREATE DUMMY DATAS");
      let numOfList = this.get('numOfList');
      let numOfTransaction = this.get('numOfTransaction');
      let numOfItem = this.get('numOfItem');
      Ember.Logger.info(`${numOfList} , ${numOfTransaction}, ${numOfItem}`);
      // List create
      _.times(numOfList, ()=>{
        Ember.Logger.info("LIST");

        let listName = faker.address.country();
        let listDescription = faker.lorem.sentence();

        let list = this.store.createRecord('list', {
          name: listName,
          description: listDescription
        });
        _.times(numOfTransaction, ()=>{
          let transaction = this.store.createRecord('transaction', {
            list: list,
            when: faker.date.past(),
            place: faker.address.city()
          });
          _.times(numOfItem, ()=>{
            let item = this.store.createRecord('item', {
              transaction: transaction,
              name: faker.commerce.productName(),
              price: _.random(0.1, 10.1),
              quantity: _.random(1, 5)
            });
            item.save();
          });
          transaction.save();
        });
        list.save();
      });
    }
  }
});
