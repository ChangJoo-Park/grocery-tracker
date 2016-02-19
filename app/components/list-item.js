import Ember from 'ember';

const { Logger } = Ember;

export default Ember.Component.extend({
  didInsertElement() {
    // Use 3rd-partylibries
    Logger.info("Component didInsertElement");
  },
  didRender() {
    this.$(".card").fadeIn("fast");
    Logger.info("Component didRender");
  },
  actions: {

  }
});
