import Ember from 'ember';
import ScrollingMixin from '../mixins/scrolling';
import ComponentTransitionsMixin from '../mixins/component-transitions';

export default Ember.Component.extend(ScrollingMixin, ComponentTransitionsMixin, Ember.Evented, {
  tagName: 'nav',
  classNames: ['app'],
  classNameBindings: ['scrolled', 'shown'],
  appNav: Ember.inject.service(),
  store: Ember.inject.service(),
  hidden: true,

  init() {
    this._super(...arguments);

    var self = this;

    this.get('appNav').on('show', function() {
      self.set('hidden', false);
    });

    this.get('store').findAll('attribute').then(function(attributes) {
      self.set('fullName', attributes.findBy('id', 'fullName').get('value'));
    });
  },

  options: function() {
    return this.get('appNav.options');
  }.property('appNav.options'),

  activeOption: function() {
    return this.get('appNav.activeOption');
  }.property('appNav.activeOption'),

  onScroll() {
    this.set('scrolled', ($(document).scrollTop() > 0));
  },

  didInsertElement() {
    this.bindScrolling();
  }
});