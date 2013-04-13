var Task = Backbone.Model.extend({
  initialize: function(){
    this.text = null;
    this.completed = false;
  }
});

var Tasks = Backbone.Collection.extend({model: Task});
