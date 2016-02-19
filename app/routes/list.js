import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.findRecord('list', param.list_id);
  },
  actions: {
    loading(transition, route) {
      return true;
    },
  }
});
