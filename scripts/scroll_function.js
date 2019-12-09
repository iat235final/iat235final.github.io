(function ($) {
    $(document).ready(function(){
      
      // hide .navbar first
      $(".navbar").hide();
      
      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
              // set distance user needs to scroll before we fadeIn navbar
              if ($(this).scrollTop() > 80) {
                  $('.navbar').fadeIn();
              } else {
                  $('.navbar').fadeOut();
              }
          });
  
      
      });
  
  });
    }(jQuery));



(function ($) {
    $(document).ready(function(){

        $(".sliding_row").css({'margin-top':'150px','opacity':'0'});    
        $(function () {
            
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {      
                    $(".sliding_row").animate({'margin-top':'100px', 'opacity':'1'}, 1000); 

                }

            });
        
        });
    
    });
    }(jQuery));


