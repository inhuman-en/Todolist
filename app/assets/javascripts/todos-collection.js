var todolist = todolist || {};

(function (ns) {

    ns.Todos = Backbone.Collection.extend({
        
        model: ns.Todo,
        
        url: '/todos',
        
        localStorage: new Backbone.LocalStorage("Todolist"),
        
        initialize: function() {
             
        },
                
        getCompleted: function(flag) {
            return this.where({completed: flag});
        }        
        
    });
     
})(todolist);