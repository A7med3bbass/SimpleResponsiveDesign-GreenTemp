$(document).ready(function () {
  'use strict';

  $('.header').height($(window).height());

   $('.header .arrow i').click(function (){
     $('html,body').animate({
        scrollTop: $('.Fitures').offset().top
     },1500);
   });

   $('.Show-mmore').click(function (){
     $('.Our-Work .hh').fadeIn(2000);
     $(this).remove();
   });
   var LeftArrow = $('.Testimonials .fa-chevron-left'),
       RightArrow = $('.Testimonials .fa-chevron-right');
   function CheckClient() {
         $('.Testimonials .client:first').hasClass('My-Active-Client') ? LeftArrow.fadeOut():LeftArrow.fadeIn();
          $('.Testimonials .client:last').hasClass('My-Active-Client') ? RightArrow.fadeOut():RightArrow.fadeIn();
      }
    CheckClient();

      // Next And Preview
      $('.Testimonials i').click(function() {
         if ($(this).hasClass('fa-chevron-right')) {
             $('.My-Active-Client').fadeOut(100,function() {
               $(this).removeClass('My-Active-Client').next('.client').addClass('My-Active-Client').fadeIn();
               CheckClient();
             });
         }
         else {
           $('.My-Active-Client').fadeOut(100,function() {
             $(this).removeClass('My-Active-Client').prev('.client').addClass('My-Active-Client').fadeIn();
             CheckClient();
           });
         }

      });
});
