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
