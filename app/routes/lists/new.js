import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('list');
  },
  actions: {
    addList(model) {
      Ember.Logger.info("[lists/new#addList()]")
      Ember.Logger.info(model);
      model.save().then((response)=>{
        // TODO : WILL CHANGE new route of new model.
        this.transitionTo('lists');
      });
    },
    willTransition(transition) {
      let model = this.get('currentModel');
      if(model && model.get('hasDirtyAttributes')){
        // TODO : CHECK DIRTY
        model.deleteRecord();
      } else {
        model.deleteRecord();
      }
    }
  }
});
