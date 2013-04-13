//MainView grabs all the rendered subviews (TaskViews) and appends them to its el.
var MainView = Backbone.View.extend({
  collection: Tasks,
  initialize: function(){
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },
  render: function(){
    this.$el.html(new AddView().render());
    this.collection.each(function(task){
      this.$el.append(new TaskView({model:task}).render());
    }, this);
  }
});
