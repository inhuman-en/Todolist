var todolist = todolist || {};

(function (ns) {

    ns.Todo = Backbone.Model.extend({
        
        urlRoot: '/todos',
        
        defaults: {
            text: 'Something...',
            completed: false
        },
        
        initialize: function() {

        },
        
        toggleCompleted: function () {
            this.save('completed', !this.get('completed'));
        }
        
    });
     
})(todolist);