// JavaScript Document

steal(
    '//jquery/class/class.js',
    '//jquery/controller/controller.js',
    '//jquery/view/ejs/ejs.js',
    '//jquery/controller/view/view.js',
    '//jquery/controller/subscribe/subscribe.js',
    '//jquery/model/model.js').then(        
    'nursing/application/calculator/config/home_menus_config.js',
    'nursing/style.css',  
    'nursing/application/calculator/calc_model.js').then(
    'nursing/application/calculator/calc_controller.js'
    ).then (
   function($){        
      $(document).ready(
         function() {
            console.log("hello world");
            new CalculatorHandler($("#tabs-layout"));
            }
         )
      }
   )
