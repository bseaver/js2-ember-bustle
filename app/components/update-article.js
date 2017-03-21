import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        category: this.get('category'),
        headline: this.get('headline'),
        picture: this.get('picture'),
        byline: this.get('byline'),
        story: this.get('story'),
        release: this.get('release')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
