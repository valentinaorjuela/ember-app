import Ember from 'ember';

var Router = Ember.Router.extend({
  location: StyleAppENV.locationType
});

Router.map(function() {
  this.resource('tabbar');
});

export default Router;
