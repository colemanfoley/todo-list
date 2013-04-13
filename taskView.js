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
