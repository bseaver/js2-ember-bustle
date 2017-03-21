import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  headline: DS.attr(),
  picture: DS.attr(),
  byline: DS.attr(),
  story: DS.attr(),
  release: DS.attr(),

  blurb: Ember.computed('story', function() {
    return this.get('story').substr(0,200) + "...";
  })
});
