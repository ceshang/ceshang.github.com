/**
 * Created by ceshang on 1/21/2016.
 */
var app = angular.module("projectApp",[]);
app.controller('projectCtrl',function($scope,$http){
    $http.get("http://ceshang.github.io/file/project.json")
        .success(function(response){
            $scope.projects = response;
        });

    $('.isotope-item').click(function(){
        $scope.index = $(this).closest('.portfolio-wrapper').find('.isotope-item').index(this);
        alert($scope.index);
    });

});
app.directive('imgGallery',function(){
    return{
        scope:{obj:'='},
        template:'{{obj.Img_Content}}'
    };
});

