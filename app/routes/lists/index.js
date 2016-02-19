import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('list');
  },
  actions: {
    loading(transition, route) {
      return true;
    },
    didTransition() {
      Ember.Logger.info("Loaded Lists.index Route");
    },
    willTransition() {
      Ember.Logger.info("Loaded Lists.index Will Transition");
    }
  }
});
