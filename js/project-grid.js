/**
 * Created by ceshang on 1/20/2016.
 */
//get project json data
var project;
var index;
var item = $(".isotope-item");
var content = $("#project-detail");

$.getJSON("http://ceshang.github.io/file/project.json", function(result){
    project=result;
});

item.click(function() {
    index = $(this).parent().index() - 1;
    
    if ($(this).hasClass("card-small")) {
        item.removeClass("active");
        $(this).toggleClass("active");
        content.animate({
            height:"0",
            overflow:"hidden"
        },500);
        $("#img1").attr('src',project[index].Img_Content[0]);
        $("#img2").attr('src',project[index].Img_Content[1]);
        $("#heading").html(project[index].Heading);
        $("#desc").replaceWith(project[index].Description);
        $("#skills").replaceWith(project[index].Skills);
        $("#example").replaceWith(project[index].Example);
        content.animate({
            height: "500px",
            overflow: "auto"
        }, 1500);
    }
    else {
        $("#project-detail").animate({
            height: "500px",
            overflow: "auto"
        }, 1500);
        item.removeClass("card");
        item.addClass("card-small");
        $(this).toggleClass("active");
    }

});
content.find(".fa-chevron-circle-up").click(function(){
    $("#project-detail").animate({
       height:"0",
       overflow:"hidden"
    },500);
    item.removeClass("card-small");
    item.removeClass("active");
    item.addClass("card");
});




