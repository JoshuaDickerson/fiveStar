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
            stars += "<input type='hidden' value='0' index='"+ii+"' class='starValue starValue"+ii+"'/>";
            stars += "</li>"
        }

        stars += "<li><input type='hidden' class='fiveStarTotal' value='0' /></li></ul>";

        this.html(stars);
        $('.starGroup').css("list-style-type", "none");
        $('.starGroupLi').css("display", "inline-block");
        $('.star_true').css({"background":"url('images/star.png')", "width":"40px", "height":"40px"});
        $('.star_false').css({"background":"url('images/star_empty.png')", "width":"40px", "height":"40px"});
        $('.star').css({"background-repeat": "no-repeat"});

        $('.starGroupLi').click(function(){
            var starIndex = parseInt($(this).find('.starValue').attr("index"));
            var starValAr = $(this).parent().find('.starValue');
            var starAr = $(this).parent().find('.star');
            $(this).parent().find('.fiveStarTotal').val(starIndex+1);
            console.log($(this).parent().find('.fiveStarTotal').val());
            for(var zz=starIndex; zz<5; zz++){
                starValAr[zz].value = "0";
                starAr[zz].className = "star_false star";
            }
            for(var ii=0; ii<=starIndex; ii++){
                starValAr[ii].value = "1";
                starAr[ii].className = "star_true star";
            }

            $('.star_true').css({"background":"url('images/star.png')", "width":"40px", "height":"40px"});
            $('.star_false').css({"background":"url('images/star_empty.png')", "width":"40px", "height":"40px"});
            $('.star').css({"background-repeat": "no-repeat"});

        });
        return this;
    };

}( jQuery ));