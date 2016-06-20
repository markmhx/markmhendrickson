import Ember from 'ember';

export default Ember.Component.extend({
  appNav: Ember.inject.service(),
  store: Ember.inject.service(),

  init: function() {
    this._super(...arguments);

    var self = this;
    this.get('store').findAll('attribute').then(function(attributes) {
      self.set('fullName', attributes.findBy('id', 'fullName').get('value'));
    });
  },

  options: function() {
    return this.get('appNav.options');
  }.property('appNav.options'),

  activeOption: function() {
    return this.get('appNav.activeOption');
  }.property('appNav.activeOption')
});
