import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  headline: DS.attr(),
  picture: DS.attr(),
  byline: DS.attr(),
  story: DS.attr(),
  release: DS.attr()
});
