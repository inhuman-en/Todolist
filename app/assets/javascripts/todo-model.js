var todolist = todolist || {};

(function (ns) {

    ns.Todo = Backbone.Model.extend({
        
        urlRoot: '/todos',
        
        defaults: {
            text: 'Something...',
            completed: false
        },
        
        initialize: function() {
            console.log('model initialized');  
        },
        
        toggleCompleted: function () {
            this.save('completed', !this.get('completed'));
        }
        
    });
     
})(todolist);