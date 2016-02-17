import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('list');
  },
  actions: {
    save() {
      Ember.Logger.info("SAVE");
      let newList = this.get('currentModel');
      Ember.Logger.info(newList);
      newList.save();
    }
  },
});
