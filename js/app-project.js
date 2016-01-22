/**
 * Created by ceshang on 1/21/2016.
 */
var app = angular.module("projectApp",[]);
app.controller('projectCtrl',function($scope,$http){
    $http.get("http://ceshang.github.io/file/project.json")
        .success(function(response){
            $scope.projects = response;
        });

});
app.directive('imgGallery',function(){
    var index = $('.isotope.active').index();
    return{
        template:index
    };
});

