var todolist = todolist || {};

(function (ns) {

    ns.TodoView = Backbone.View.extend({
        
	tagName: "li",
	        
        className: "todo",
			
	template: JST["templates/todo-tpl"],
	edit_tpl: JST["templates/todo-edit-tpl"],
        
        events: {
            "click .delete-todo": "deleteTodo",
            "click .complete-todo": "completeTodo",
	    "dblclick": "editTodo",
	    "keypress .edit": "saveEdited",
	    "focusout .edit": "saveEdited"
        },
        
        initialize: function() {
            this.model.on('change', this.render, this);
        },
	
	editTodo: function(e) {	    
	    this.$el.html(this.edit_tpl( {text: this.model.get('text'),
					  completed: this.model.get('completed')} ));
	    this.$el.children(".edit").focus();
	},
	
	saveEdited: function(e) {	    
	    if ((e.type === "focusout") || (e.keyCode === 13)) {
		this.model.save( {text: $(e.target).val().trim()} );
		this.render();
	    } 
	},
        
        completeTodo: function() {
	    this.model.toggleCompleted();
        },
        
        deleteTodo: function() {
	    this.model.destroy();
	    this.undelegateEvents();
        },
	        
        render: function() {
            this.$el.html(this.template( {text: this.model.get('text'),
                                          completed: this.model.get('completed')} ));
	    return this;
        }
        
    });
     
})(todolist);