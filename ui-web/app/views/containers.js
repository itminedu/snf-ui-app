import Ember from 'ember';

export default Ember.View.extend({
  templateName: function() {
    var view = 'list';
    if (this.get('controller.view')) {
      view = this.get('controller.view');
    }
    if (this.get('controller')) {
      return this.get('controller.templatePrefix')+ '-'+view;
    }
 
  }.property('controller.view'),

  viewChanged: function() {
    this.rerender();
  }.observes('controller.view'),

});
