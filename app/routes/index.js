import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  actions: {
    saveArticle(params) {
      console.log(params);
      Object.keys(params).forEach(function(key) {
        if (params[key]===undefined) {
          params[key]= "";
        }
      });
      console.log(params);

      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    }
  }
});
