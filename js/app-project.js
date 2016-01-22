/**
 * Created by ceshang on 1/21/2016.
 */
var app = angular.module("projectApp",[]);
app.controller('projectCtrl',function($scope,$http){
    $http.get("http://ceshang.github.io/file/project.json")
        .success(function(response){
            $scope.projects = response;
        });

    $('.card').click(function(){
        $scope.index = $(this).closest('.portfolio-wrapper').find('.card').index(this);
    });
    
    $(".isotope-item").click(function(){
        if($(this).hasClass("card-small")){
            $(".isotope-item").removeClass("active");
            $(this).toggleClass("active");

        }
        else{
            $("#project-detail").animate({
                height:"300px",
                overflow:"auto"
            },1500);
            $(".isotope-item").removeClass("card");
            $(".isotope-item").addClass("card-small");
            $(this).toggleClass("active");
        }

    });
});
app.directive('imgGallery',function(){
    return{
        scope:{obj:'='},
        template:'{{obj.Img_Content}}'
    };
});

