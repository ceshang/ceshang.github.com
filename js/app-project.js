/**
 * Created by ceshang on 1/21/2016.
 */
var app = angular.module("projectApp",[]);
app.controller('projectCtrl',function($scope,$http){
    $http.get("http://ceshang.github.io/file/project.json")
        .success(function(response){
            $scope.projects = response;
        });
    $scope.index = $('.active').parent().index()-1;
});

app.directive('imgGallery',function(){
    return{
        template:'<img src={{project.Img_Content[0]}} style="height:200px;"/><img src={{project.Img_Content[1]}} style="height:200px;"/>',
        scope:{
            project:'=project'
        }
    }
});