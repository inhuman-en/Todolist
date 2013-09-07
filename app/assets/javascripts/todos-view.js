var todolist = todolist || {};

(function (ns) {

    ns.TodosView = Backbone.View.extend({
	
	collection: new ns.Todos(),
		
	template: JST["templates/todos-tpl"],
	
	events: {
	    'keypress #new-todo': 'newTodo',
	    'click #show-completed': 'showCompleted',
	    'click #show-remaining': 'showCompleted',
	    'click #show-all': 'render'
	},
	
        initialize: function() {
	    this.collection.on('all', this.render, this);
	    //this.collection.on('add', this.addTodoTolist, this);
	    //this.listenTo(this.collection, 'reset', this.render);
	    //this.listenTo(this.collection, 'add', this.addTodoTolist);
	    this.collection.fetch();
        },
        
        addTodoTolist: function(model) {
            var view = new ns.TodoView({model: model});
	    this.$el.children(1).children("#list").append(view.render().$el);  
        },
	
	newTodo: function(e) {
	    var model,
	        field = $(e.target);
	    
	    if (e.keyCode === 13) {
		//model = new ns.Todo( {text: field.val()} );
		//model.save();
		this.collection.create({text: field.val()});
		field.val('');
	    }	    
	},
		
	showCompleted: function(e) {
	    var arr = ($(e.target).attr('id') === 'show-completed') ?
		    this.collection.getCompleted(true) :
		    this.collection.getCompleted(false),
	        filetedTodos = new ns.Todos(arr);

	    this.$el.html(this.template( {total: filetedTodos.length} ));
            filetedTodos.each(this.addTodoTolist, this);
	},
		        
        render: function() {
            this.$el.html(this.template( {total: this.collection.length} ));
            this.collection.each(this.addTodoTolist, this);
	    $("#new-todo").focus();
            return this;
        }
        
    });
     
})(todolist);