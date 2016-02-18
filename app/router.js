import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', { path: '/' },function() {
    this.route('new');
  });
  this.route('list', { path: '/lists/:list_id'},function() {
    this.route('edit');
    this.route('transactions');
  });

  this.route('admin');
});

export default Router;
