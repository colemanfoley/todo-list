var Task = Backbone.Model.extend({
  initialize: function(){
    this.text = null;
    this.completed = false;
  }
});

var Tasks = Backbone.Collection.extend({model: Task});

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
      return this.$el.html('<input type="checkbox" class="check">'+this.model.get("text"))
      .addClass("completed");
    }
    else {
      return this.$el.html('<input type="checkbox" class="check">'+this.model.get('text'));
    }
  },

  markComplete: function(){
    this.model.set("completed", true);
  },

  events: {
    'click .check': 'markComplete'
  }
});

//This is the collection of tasks, initialized to have a null text property and a completed value of false.
var tasks = new Tasks([
  new Task({text: "test", completed: false}),
  new Task({text: "test2", completed: false})
]);

//An instance of MainView is made whenever the app is run.
var mainView = new MainView({collection: tasks});

//The rendered main view is put on the page.
$(document).ready(function(){
  mainView.$el.appendTo(document.body);
});
