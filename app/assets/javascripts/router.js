// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('root', { path: '/#' });
  this.resource('about');
  this.route('missing', { path: '/*path'});
});

App.MissingRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('/');
  }
})
