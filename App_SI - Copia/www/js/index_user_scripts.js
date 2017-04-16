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
    
    
        /* listitem  #botao_perfil */
    
    
        /* button  #botao_havard */
    
    
        /* listitem  #botao_perfil */
    $(document).on("click", "#botao_perfil", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#sub_pagecontatos"); 
    });
    
        /* button  #botao_havard */
    
    
        /* listitem  #botao_contato */
    
    
        /* button  #botao_havard */
    $(document).on("click", "#botao_havard", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#objetivos"); 
    });
    
        /* button  #botao_home */
    
    
        /* button  #botao_home */
    
    
        /* button  #botao_home */
    $(document).on("click", "#botao_home", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#site_unc"); 
    });
    
        /* listitem  #botao_qsomos */
    $(document).on("click", "#botao_qsomos", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#perfil"); 
    });
    
        /* listitem  #mapa_campus */
    $(document).on("click", "#mapa_campus", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* listitem  #mapa_campus */
    $(document).on("click", "#mapa_campus", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#mapa"); 
    });
    
        /* listitem  #tur */
    $(document).on("click", "#tur", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#tour"); 
    });
    
        /* listitem  #botao_contato */
    $(document).on("click", "#botao_contato", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#objetivos"); 
    });
    
        /* listitem  Presentes */
    $(document).on("click", ".uib_w_30", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fotos"); 
    });
    
        /* listitem  #botao_campus */
    $(document).on("click", "#botao_campus", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#esolas"); 
    });
    
        /* listitem  Como Chegar */
    $(document).on("click", ".uib_w_45", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#cchegar"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
