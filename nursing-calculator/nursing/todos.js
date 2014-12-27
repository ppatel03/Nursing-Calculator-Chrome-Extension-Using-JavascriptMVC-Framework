// JavaScript Document
steal('//jquery/class/class.js',
    '//jquery/controller/controller.js',
    '//jquery/view/ejs/ejs.js',
    '//jquery/controller/view/view.js',
    '//jquery/controller/subscribe/subscribe.js',
    '//jquery/model/model.js',
    '//jquery/dom/fixture/fixture.js',
      function($){
$.Model('Todo',{
    findAll : "GET /todos",
    findOne : "GET /todos/{id}",
    create  : "POST /todos",
    update  : "PUT /todos/{id}",
    destroy : "DELETE /todos/{id}"
  },
  {})
/*var todo=new Todo({name:"do the dishes"});
console.log(todo.attr('name'));
console.log(Todo.findAll({}));*/

// our list of todos
var TODOS = [
    {id: 1, name: "wake up"},
    {id: 2, name: "take out trash"},
    {id: 3, name: "do dishes"}
];
// findAll
$.fixture("GET /todos", function(){
  return [TODOS]
});

// findOne
$.fixture("GET /todos/{id}", function(orig){
  return TODOS[(+orig.data.id)-1];
})

// create
var id= 4;
$.fixture("POST /todos", function(){
  return {id: (id++)}
})

// update
$.fixture("PUT /todos/{id}", function(){
  return {};
})

// destroy
$.fixture("DELETE /todos/{id}", function(){
  return {};
})

Todo.findAll({},function(todos){
console.log(todos);
});
Todo.findOne({}, function( todo ) {
  console.log( todo );
})
var todo = new Todo({name: "mow lawn"});
todo.save( function(todo){
  console.log("created", todo );

  todo.attr("name", "mow my lawn")
  todo.save( function( todo ) {
    console.log("updated", todo );
  })
})

$.Controller("Todos",
{
  defaults : {template: 'todosEJS'}
},
{
  "init" : function( element , options ){
    element.html(options.template, Todo.findAll() )
  },
  "li click" : function(li,event){
    console.log("You clicked on ", li.text());
  },
  "li .destroy {destroyEvent}" : function(el, ev){
    // get the li element that has the model
    var li = el.closest('.todo');
    console.log(li);

    // get the model
    var todo = li.model()
    console.log(todo);
    //destroy it
    todo.destroy(function(){
      // remove the element
      li.remove();
    });
  }
})

new Todos( "#todos",{destroyEvent: "mouseenter"} );

})
