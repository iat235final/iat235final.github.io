

(function ($) {
    $(document).ready(function(){

        $(function () {

        $(".us_narrative").hide();
        $(".us_title").css({'opacity':'0.5'}); 

        $('input[type=checkbox]').click(function() {
            if($(this).is(":checked")) {        
                $(".portugal_narrative").hide();
                $(".us_narrative").show();


                $(".us_title").css({'opacity':'1'}); 
                $(".portugal_title").css({'opacity':'0.5'}); 

            } else {
                $(".us_narrative").hide();
                $(".portugal_narrative").show();

                $(".us_title").css({'opacity':'0.5'}); 
                $(".portugal_title").css({'opacity':'1'}); 
            }
        });

    });
    
});
}(jQuery));
