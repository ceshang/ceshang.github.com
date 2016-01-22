/**
 * Created by ceshang on 1/20/2016.
 */
$(".isotope-item").click(function(){
    if($(this).hasClass("card-small")){
        $(".isotope-item").removeClass("active");
        $(this).toggleClass("active");

    }
    else{
        $("#project-detail").animate({
            height:"500px",
            overflow:"auto"
        },1500);
        $(".isotope-item").removeClass("card");
        $(".isotope-item").addClass("card-small");
        $(this).toggleClass("active");
    }

});

$("#project-detail").find(".fa-chevron-circle-up").click(function(){
    $("#project-detail").animate({
       height:"0",
       overflow:"hidden"
    },500);
    $(".isotope-item").removeClass("card-small");
    $(".isotope-item").removeClass("active");
    $(".isotope-item").addClass("card");
});

