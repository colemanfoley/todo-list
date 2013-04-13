//MainView grabs all the rendered subviews (TaskViews) and appends them to its el.
var MainView = Backbone.View.extend({
  collection: Tasks,
  initialize: function(){
    this.listenTo(this.collection, 'change', this.render);
    this.render();
  },
  render: function(){
    this.$el.html("<h1>To do</h1>");
    this.collection.each(function(task){
      this.$el.append(new TaskView({model:task}).render());
    }, this);
  }
});

//TaskView builds a list item for each task.
var TaskView = Backbone.View.extend({
  model: Task,
  tagName: "li",
  className: "task",

  render: function(){
    if (this.model.get('completed')) {
      this.$el.addClass("completed");
    }
    return this.$el.html('<input type="checkbox" class="check">'+this.model.get('text'));
  },

  toggleComplete: function(){
    this.model.set("completed", !this.model.get("completed"));
  },

  events: {
    'click .check': 'toggleComplete'
  }
});
