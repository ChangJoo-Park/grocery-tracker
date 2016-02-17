import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', { path: '/' },function() {
    this.route('list', { path: ':list_id'},function() {
      this.route('edit');
      this.route('transactions');
    });
  });
});

export default Router;
