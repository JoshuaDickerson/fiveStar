/**
 * Created by josh on 11/3/13.
 */

(function ( $ ) {

    $.fn.fiveStar = function() {

        var stars = "";
        stars += "<ul class='starGroup'>";
        for(var ii=0; ii<5; ii++){
            stars += "<li class='starGroupLi'>";
            stars += "<div class='star star_false'></div>";
            stars += "<input type='hidden' value='0' class='starValue starValue"+ii+"'/>";
            stars += "</li>"
        }

        this.html(stars);
        $('.starGroup').css("list-style-type", "none");
        $('.starGroupLi').css("display", "inline-block");
        $('.star_true').css({"background":"url('images/star.png')", "width":"40px", "height":"40px"});
        $('.star_false').css({"background":"url('images/star_empty.png')", "width":"40px", "height":"40px"});
        $('.star').css({"background-repeat": "no-repeat"});

        $('.starGroupLi').click(function(){
            if($(this).find('.star').hasClass("star_false")){
                $(this).find('.star').removeClass("star_false");
                $(this).find('.star').addClass("star_true");
                $(this).find('.starValue').val(1);
                $('.star_true').css({"background":"url('images/star.png')", "width":"40px", "height":"40px"});
                $('.star_false').css({"background":"url('images/star_empty.png')", "width":"40px", "height":"40px"});
                $('.star').css({"background-repeat": "no-repeat"});

            }else{
                $(this).find('.star').addClass("star_false");
                $(this).find('.star').removeClass("star_true");
                $(this).find('.starValue').val(0);
                $('.star_true').css({"background":"url('images/star.png')", "width":"40px", "height":"40px"});
                $('.star_false').css({"background":"url('images/star_empty.png')", "width":"40px", "height":"40px"});
                $('.star').css({"background-repeat": "no-repeat"});
            }
        });
        return this;
    };

}( jQuery ));