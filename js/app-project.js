/**
 * Created by ceshang on 1/21/2016.
 */


var app = angular.module("projectApp",[]);
app.controller('projectCtrl',function($scope){
    $http.get("http://ceshang.github.io/file/project.json")
        .success(function(response){
            $scope.projects = response;
        });
    var index = $(".card.active").index();
    var active_proj = $scope.projects[index];
    $scope.img_gallery=active_proj["Img_Content"];
    $scope.heading=active_proj["Heading"];
    $scope.description=active_proj["Description"];
    $scope.skills=active_proj["Skills"];
    $scope.examples=active_proj["Example"];
});

