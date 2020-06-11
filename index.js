// JavaScript Document
$(document).ready(function(){
        /* 메뉴 드롭다운 */
        $(".lnb > ul > li").mouseover(function(){
            $(".lnb_bg").slideDown();
            $(".lnb > ul > li > ul").slideDown();
        });
        
        $(".lnb_bg").mouseleave(function(){
            $(".lnb > ul > li > ul").slideUp();
            $(".lnb_bg").slideUp();
        })

        
        /* 비주얼 슬라이드 */
      var slide1 = $('.slider').bxSlider({
          auto:true,
          pause:4000
      });
        
      $('.controls .play').on('click', function(){
          slide1.startAuto();
      });
      $('.controls .pause').on('click', function(){
          slide1.stopAuto();
      });
      
        
        /* 매거진 슬라이드 */    
        $('.slider_magazine').bxSlider();
        
        
        /* 블로그 슬라이드 */
        $('.slider_blog').bxSlider();  
        
        
        /* 팝업 */
        $(".open").on("click",function(){
            $(".dim").fadeIn();
            $(".popup").fadeIn();
        });
        
        $(".close").on("click",function(){
           $(".popup").fadeOut();
           $(".dim").fadeOut();
        });
    });