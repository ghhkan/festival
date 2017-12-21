$(document).ready(function(){

  $('div.dropdown > a').on('click',function(event){

   event.preventDefault()

   $(this).parent().find('ul').first().toggle(300);

   $(this).parent().siblings().find('ul').hide(200);

   //Hide menu when clicked outside
   $(this).parent().find('ul').mouseleave(function(){
     var thisUI = $(this);
     $('html').click(function(){
       thisUI.hide();
       $('html').unbind('click');
     });
   });


 });


 var winHeight = $(window).innerHeight();
 $(".panel").height(winHeight);
 $(window).on('scroll', function(){
 	$(".left").css('bottom', $(window).scrollTop()*-1);
 });




 $(window).scroll( function(){

       $('.hideme').each( function(i){

           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           if( bottom_of_window > bottom_of_object ){

               $(this).animate({'opacity':'1'},500);

           }


       });

   });

   $("#edina").click(function(){
     $("html, body").animate({
       scrollTop:$("#artone").offset().top
     }, 2000);
   });

   $("#stanthony").click(function(){
     $("html, body").animate({
       scrollTop:$("#arttwo").offset().top
     }, 2000);
   });

   $("#eagan").click(function(){
     $("html, body").animate({
       scrollTop:$("#artthree").offset().top
     }, 2000);
   });

   $("#uptown").click(function(){
     $("html, body").animate({
       scrollTop:$("#artfour").offset().top
     }, 2000);
   });

   $("#stone").click(function(){
     $("html, body").animate({
       scrollTop:$("#artfive").offset().top
     }, 2000);
   });

   $("#loring").click(function(){
     $("html, body").animate({
       scrollTop:$("#artsix").offset().top
     }, 2000);
   });

   $(function() {
     $("#slides").slidesjs({
       width: 940,
       height: 528,
       play: {
         active:false,
         auto:true,
         interval: 2000,
         swap:true
       }
   });
   });


});
