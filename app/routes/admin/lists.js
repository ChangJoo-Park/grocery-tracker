import Ember from 'ember';
import _ from 'lodash';
import faker from 'faker';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('list');
  }
});
