import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addList() {
      let newList = this.get('newList');
      this.sendAction('action', newList);
    }
  },
});
