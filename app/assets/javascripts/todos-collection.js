var todolist = todolist || {};

(function (ns) {

    ns.Todos = Backbone.Collection.extend({
        
        model: ns.Todo,
        
        url: '/todos',
        
        //localStorage: new Store("Todolist"),
        
        initialize: function() {
             
        },
        
        //addDefaults: function() {
        //    this.reset([{text: 'do homework', completed: false},
        //                {text: 'go to supermarket', completed: true},
        //                {text: 'prepare dinner', completed: false},
        //                {text: 'and one more thing', completed: true}]);
        //}
        
        getCompleted: function(flag) {
            return this.where({completed: flag});
        }        
        
    });
     
})(todolist);