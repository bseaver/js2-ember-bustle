import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  actions: {
    saveArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      result = newArticle.save();
      console.log(result);
      alert("In index.js saveArticle");
      this.transitionTo('index');
    }
  }
});
