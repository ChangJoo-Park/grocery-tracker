import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToNew(){
      this.transitionTo('lists.new');
    }
  }
});