import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loading(transition, route) {
      Ember.Logger.info("Loading List.index Route");
    },
    didTransition() {
      Ember.Logger.info("Loaded List.index Route");
    },
    willTransition() {
      Ember.Logger.info("Loaded List.index Will Transition");
    }
  }
});
