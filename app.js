var Task = Backbone.Model.extend({
  initialize: function(){
    this.text = null;
    this.completed = false;
  }
});

var Tasks = Backbone.Collection.extend({model: Task});

var MainView = Backbone.View.extend({
  collection: Tasks,
  initialize: function(){
    this.render();
  },
  render: function(){
    this.collection.each(function(task){
      this.$el.append(new TaskView({model:task}).render());
    }, this);
  }
});

var TaskView = Backbone.View.extend({
  model: Task,
  tagName: "li",
  className: "task",

  render: function(){
    return this.$el.html('<input type="checkbox">'+this.model.get('text'));
  }
});

var tasks = new Tasks([
  new Task({text: "test", completed: false}),
  new Task({text: "test2", completed: false})
]);

var mainView = new MainView({collection: tasks});

$(document).ready(function(){
  mainView.$el.appendTo(document.body);
});
