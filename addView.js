var AddView = Backbone.View.extend({
	id: "addContainer",
	initialize: function(){
		$(document).keypress(function(e) {
	    if((e.which == 13) && $('.taskInput').is(':focus') && $('.taskInput').val()){
	      tasks.add({text: $('.taskInput').val()});
	      console.log(tasks);
	    }
		});
	},
  render: function(){
    this.$el.html("<h1>To do</h1>");
    this.$el.append('<input class="taskInput" placeholder="What needs to be done?">');
    return this.$el;
  }
});
