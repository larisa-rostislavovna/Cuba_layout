$(function(){

    $('.photo_slider').slick({
       arrow: false,
       prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="left"></button>',
       nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="right"></button>',
    });

    $('.menu__btn').on('click',function(){
      $('.menu_list').slideToggle();  
    });





       
  });
