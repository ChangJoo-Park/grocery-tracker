import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $(this.element).find(".button-collapse").sideNav();
  },
  actions: {
  }
});
