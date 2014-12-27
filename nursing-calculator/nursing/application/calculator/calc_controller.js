// JavaScript Document
$.Controller('CalculatorHandler',
   /* @Static */
   {
      defaults :{
                    //For future use
                },      
      checkDecimal:function(inputTxt)
      {
        var numbers=/^[0-9]+(\.[0-9]+)+$/; 
        if(inputTxt.match(numbers))
        {
            return true;
        }
        else
        {
            return false;
        }
      },
      validateForm:function(element)
      { 
            var isValidate=true;
            if($(":radio").length>0)
            {
                if(typeof($(':radio[name='+$(":radio").attr("name")+']:checked').val())=="undefined")
                {
                    //console.log($(":radio").attr("id"));                   
                    $("#"+$(":radio").attr("id")+"_validate").html("<font size='2'>*No radio button selected</font>"); 
                    isValidate= false;
                }
                else
                {
                    $("#"+$(":radio").attr("id")+"_validate").html("");
                }
                
            }
             $(".operand:visible:not(select)").each(function(index)
                {         
                    console.log($(this).val()); 
                    if($(this).val()==null || $(this).val()=="")
                    {
                        console.log("empty string");
                        $("#"+$(this).attr("id")).addClass("text-field-validator");
                       $("#"+$(this).attr("id")+"_validate").html("<font size='2'>*field cannot be left blank</font>"); 
                       isValidate= false;
                    }  
                    else if(isNaN($(this).val())&&$(this).val()!="N/A") 
                    {
                        $("#"+$(this).attr("id")).addClass("text-field-validator");
                        $("#"+$(this).attr("id")+"_validate").html("<font size='2'>*Only numbers</font>"); 
                        isValidate= false;
                    } 
                    else
                    {   
                        if($(".text-field-validator").length!=0)
                        {
                           
                            $("#"+$(this).attr("id")).removeClass("text-field-validator");
                        }
                        $("#"+$(this).attr("id")+"_validate").html("");
                    }               
                });
            return isValidate;
      }      
   },
    /* @Prototype */
   {
   /**
    * Called by the framework when the controller is initiated
    * Fetch and display all airports.
   */
   init: function(){
      this.generateHomePage();
   },
   
   generateHomePage : function()
   {  
        var homeMenus=calculator_model_config.getAllHomeMenus();
         $(".home-tabs").html("#home-tabs-script");   
         $(".home-tabs").html( 'home_tabs_view_ejs', homeMenus);           
   },
   ".calc-tabs click" : function(element,options)
   {         
        $(".home-tabs").animate({ height: 'hide', opacity: 'hide' }, 'slow');
        this.genenrateSubmenusAndBreadcrumbs(element.attr("id"));         
   },
   genenrateSubmenusAndBreadcrumbs : function(tabId)
   {    
        var breadcrumbs=calculator_model_config.getMenuBreadcrumbs(tabId);
        var subMenus=calculator_model_config.getSubMenus(tabId);
        if(!subMenus || subMenus=="error")
        {
            console.log("submenu not found");
            $(".breadcrumbs").html("#breadcrumbs-script");   
            $(".breadcrumbs").html('breadcrumbs_ejs',breadcrumbs);
            $(".submenus-tabs").html("Coming Soon. Only Dosage Calculator is working");            
            $(".breadcrumbs").animate({height:'show',opacity:'show'},'slow');
            $(".submenus-tabs").animate({ height: 'show', opacity: 'show' }, 'slow');
        }
        else
        {             
            $(".breadcrumbs").html("#breadcrumbs-script");   
            $(".breadcrumbs").html('breadcrumbs_ejs',breadcrumbs);
            $(".submenus-tabs").html("#sub-menus-script");
            $(".submenus-tabs").html('submenus_tabs_ejs',subMenus);
            $(".breadcrumbs").animate({height:'show',opacity:'show'},'slow');
            $(".submenus-tabs").animate({ height: 'show', opacity: 'show' }, 'slow');
  	    }
   },
   ".crumb-link click" : function(element,options)
   {
       var elementId=element.attr("id");
       var breadcrumbs_item= document.getElementById(element.attr("id"));
       var current_index=$(".crumb-link").index(breadcrumbs_item);
       var show_menu=elementId.replace("-link","");
       if (show_menu=="home-tabs")
         {
            $(".crumb-link:gt("+current_index+")").animate({height:'hide',opacity:'hide'},'slow');
            $(".submenus-tabs").animate({height:'hide',opacity:'hide'},'slow');            
            $(".form").animate({height:'hide',opacity:'hide'},'slow'); 
            $(".calc-results").animate({height:'hide',opacity:'hide'},'slow');
            $(".calc-formulae").animate({height:'hide',opacity:'hide'},'slow');
            $(".form-layout").removeClass("form_design_layout");          
            $(".home-tabs").animate({height:'show',opacity:'show'},'slow');
         } 
       else
         {
            $(".crumb-link:gt("+current_index+")").animate({height:'hide',opacity:'hide'},'slow');
            $(".form").animate({height:'hide',opacity:'hide'},'slow');
            $(".calc-results").animate({height:'hide',opacity:'hide'},'slow');
            $(".calc-formulae").animate({height:'hide',opacity:'hide'},'slow');
            $(".form-layout").removeClass("form_design_layout"); 
            var subMenus=calculator_model_config.getSubMenus(show_menu);
            $(".submenus-tabs").html("#sub-menus-script");
            $(".submenus-tabs").html('submenus_tabs_ejs',subMenus);
            $(".submenus-tabs").animate({ height: 'show', opacity: 'show' }, 'slow');
       
         }      
   },
   ".sub-calc-tabs click" : function(element,options)
   {
        $(".submenus-tabs").animate({ height: 'hide', opacity: 'hide' }, 'slow');
        console.log(element.attr("id"));
        var submenu_id=element.attr("id");
        this.generateFormAndBreadcrumbs(submenu_id);
   },
   generateFormAndBreadcrumbs:function(submenu_id)
   {
        var breadcrumbs=calculator_model_config.getFormBreadcrumbs(submenu_id);
        var formParams=calculator_model_config.getFormParams(submenu_id);
         if(!formParams || formParams=="error")
        {
            console.log("form not found");
            $(".breadcrumbs").html("#breadcrumbs-script");   
            $(".breadcrumbs").html('breadcrumbs_ejs',breadcrumbs);
            $(".submenus-tabs").html("Coming Soon. Check other calculators under this category");            
            $(".breadcrumbs").animate({height:'show',opacity:'show'},'slow');
            $(".submenus-tabs").animate({ height: 'show', opacity: 'show' }, 'slow');         
        }
        else
        {
            $(".breadcrumbs").html("#breadcrumbs-script");   
            $(".breadcrumbs").html('breadcrumbs_ejs',breadcrumbs);
            $(".form").html("#form-generator-script");
            $(".form").html("form_generator_ejs",formParams);
            $(".form-layout").addClass("form_design_layout");
            $(".breadcrumbs").animate({height:'show',opacity:'show'},'slow');
            $(".form").animate({height: 'show', opacity: 'show'}, 'slow');
        }
   },
   "#solve-button click" : function(element,options)
   {
        if(CalculatorHandler.validateForm(element))
        {
           //console.log(element.attr("class"));
            var submenu_id=element.attr("class").replace("-inputs",""); 
            var formulaFromConfig="formulae";
            var unitId="unit";
            if($(":radio").length > 0) 
            {
                var radioButtonName=$(":radio").attr("name");
                console.log(radioButtonName);
                console.log($(':radio[name='+radioButtonName+']:checked').val());
                formulaFromConfig=$(':radio[name='+radioButtonName+']:checked').val();
            } 
            else 
            {
                console.log("No radio buttons found!, Crap!");
            }
            console.log("Before printing calculator config");   
            console.log(calculator_model_config.getFormula(submenu_id,formulaFromConfig));           
            var formulaeFromConfig=calculator_model_config.getFormula(submenu_id,formulaFromConfig);
            if(!formulaeFromConfig || formulaeFromConfig=="error")
            {
                console.log("formula not found");            
                $(".calc-results").html("Team is working on the formula. Would come up with the results very soon");           
                $(".calc-results").animate({ height: 'show', opacity: 'show' }, 'slow');           
            }
            else
            {
                var formula; 
                var resultWithoutUnits=0;
                var unit="";
                var result="";        
                for(var i=0;i<formulaeFromConfig.length;i++)
                {    
                    formula=formulaeFromConfig[i]['formula']; 
                    var noOfDecimals=formulaeFromConfig[i]["rounding"];     
                    $(".operand:visible").each(function(index)
                    {         
                        if(formula.indexOf($(this).attr("id"))!=-1)
                        {   
                            var regex = new RegExp($(this).attr("id"), 'g');
                            formula=formula.replace(regex,$(this).val());
                        }
                    });
                    console.log(formula); 
                    resultWithoutUnits=eval(formula);
                    console.log(resultWithoutUnits);
                    if(CalculatorHandler.checkDecimal(resultWithoutUnits.toString())&& 
                    typeof (noOfDecimals)==="undefined")
                    {
                        resultWithoutUnits=resultWithoutUnits.toFixed(2);
                    }
                    unit=formulaeFromConfig[i]['unit'];
                    result+=resultWithoutUnits+" "+unit+"\n";
                }                 
        
                var formulaInHtml=(calculator_model_config.getFormulaHtml(submenu_id));
                console.log(formulaInHtml);
                $(".calc-results").html("#result-generator-script");
                $(".calc-results").html("result_generator_ejs",{endResult:result});
                $(".calc-formulae").html(formulaInHtml);
                $(".calc-results").animate({ height: 'show', opacity: 'show' }, 'slow');
                $(".calc-formulae").animate({ height: 'show', opacity: 'show' }, 'slow');
            }
        }
        
    },
    ".tooltip img mouseenter":function(element,options){
        //console.log("I had hoveresd on "+element.parent().parent().attr("id"));
        var elementId=element.attr("id");
        var tooltipTextId=elementId.replace("_tooltip_img","_tooltip_text");
        $("#"+tooltipTextId).show();        
    },
    ".tooltip img mouseleave":function(element,options){        
        $(".tooltip_text").hide();        
    }
    }   
);
