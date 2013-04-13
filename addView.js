var AddView = Backbone.View.extend({
  render: function(){
    this.$el.html("<h1>To do</h1>");
    this.$el.append("<input>");
    return this.$el;
  }
})
