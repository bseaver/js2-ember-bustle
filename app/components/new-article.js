import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle() {
      var params = {
        category: this.get('category'),
        headline: this.get('headline'),
        byline: this.get('byline'),
        story: this.get('story'),
        release: this.get('release'),
        picture: this.get('picture'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
