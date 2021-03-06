import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  createdAt: attr('date'),
  description: attr('string'),
  foursquareVenueId: attr('string'),
  likesCount: attr('number'),
  placeAddress: attr('string'),
  placeName: attr('string'),
  placeCategory: attr('string'),
  placeCity: attr('string'),
  placeCountry: attr('string'),
  placeCountryCode: attr('string'),
  placeLatitude: attr('number'),
  placeLongitude: attr('number'),
  placeState: attr('string'),
  photoUrl: attr('string'),
  thumbImageUrl: attr('string'),

  imageUrl: Ember.computed('photoUrl', function() {
    return this.get('photoUrl');
  }),

  placeUrl: Ember.computed('foursquareVenueId', function() {
    if (!this.get('foursquareVenueId')) { return; }

    return `http://foursquare.com/v/${this.get('foursquareVenueId')}`;
  }),

  name: Ember.computed('placeName', function() {
    return this.get('placeName');
  })
});
