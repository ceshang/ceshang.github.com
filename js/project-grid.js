/**
 * Created by ceshang on 1/20/2016.
 */
//get project json data
var project;
var index;

$.getJSON("demo_ajax_json.js", function(result){
    project=result;
});
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
    index = $(this).parent().index()-1;
    $("#img1").attr('src',project[index].Img_Content[0]);
    $("#img2").attr('src',project[index].Img_Content[1]);
    //change description html
    //change skill text
    //change example html
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




