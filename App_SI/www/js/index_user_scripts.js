/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #botao_menu */
    $(document).on("click", "#botao_menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_6"));  
    });
    
        /* button  Fechar */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_6"));  
    });
    
        /* button  #botao_home */
    $(document).on("click", "#botao_home", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#objetivos"); 
    });
    
        /* listitem  #botao_perfil */
    $(document).on("click", "#botao_perfil", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#perfil"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
