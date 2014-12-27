// JavaScript Document
/**
 * @tag models, home
 * Wraps backend services.
 */
$.Model('calculator_model_config',
/* @Static */
{
	/**
 	 * Retrieves homepage menu, submenu data from your config services, or from fixture
 	 */    
    getAllHomeMenus: function()
    {
        return MENUS;
    },
    getHomeMenu: function(id)
    {
        return MENUS[--id];
    },
    getSubMenus: function(menuName)
    {
        var i;
        for(i=0;i<MENUS.length;i++)
            {
                if(MENUS[i]['div_id']==menuName)
                {
                    return MENUS[i]['submenu'];
                }
            }
        if(i==MENUS.length)
        {
            return "error";
        }
    },
    getMenuBreadcrumbs: function(menuName)
    {
        var i;
        for(i=0;i<MENUS.length;i++)
            {
                if(MENUS[i]['div_id']==menuName)
                {
                    return MENUS[i]['breadcrumbs'];
                }
            }
        if(i==MENUS.length)
        {
            return "error";
        }
    },
    getFormBreadcrumbs: function(submenu_id)
    {
        var i;
        for(i=0;i<FORMS.length;i++)
            {
                if(FORMS[i]['submenus_id']==submenu_id)
                  {
                    return FORMS[i]['breadcrumbs'];
                  }
            }
        if(i==FORMS.length)
          {
            return "error";
          }
    },
    getFormParams:function(submenu_id)
    {
        var i;
        for(i=0;i<FORMS.length;i++)
            {
                if(FORMS[i]['submenus_id']==submenu_id)
                  {
                    return FORMS[i]['form'];
                  }
            }
        if(i==FORMS.length)
          {
            return "error";
          }
    },
    getFormula:function(submenu_id,formulaFromConfig)
    {
        var i;
        for(i=0;i<FORMS.length;i++)
            {
                if(FORMS[i]['submenus_id']==submenu_id)
                  {
                    return FORMS[i][formulaFromConfig];
                  }
            }
        if(i==FORMS.length)
          {
            return "error";
          }        
    },
    getFormulaHtml:function(submenu_id)
    {
        var i;
        for(i=0;i<FORMS.length;i++)
            {
                if(FORMS[i]['submenus_id']==submenu_id)
                  {
                    return FORMS[i]['formula_html'];
                  }
            }
        if(i==FORMS.length)
          {
            return "error";
          }        
    }   
},
/* @Prototype */
{});
