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
  this.route('admin', function() {
    this.route('lists', { path: 'lists'},function(){
      this.route('list', { path: '/:list_id'}, function() {
        this.route('transactions', { path: '/transactions/:transaction_id'});
      });
    });

  });
});

export default Router;
