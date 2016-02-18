import Ember from 'ember';
import _ from 'lodash';
import faker from 'faker';

export default Ember.Controller.extend({
  numOfLists: 0,
  actions: {
    addList() {
      let numOfLists = this.get('numOfLists');
      if(numOfLists === 0) {
        return;
      }
      for (var i = 0; i < numOfLists; i++) {
        let newList = this.store.createRecord('list', {
          name: faker.address.country(),
          description: faker.lorem.sentence()
        });
        newList.save();
      }
    },
    deleteList(list) {
      list.destroyRecord();
    }
  }
});
