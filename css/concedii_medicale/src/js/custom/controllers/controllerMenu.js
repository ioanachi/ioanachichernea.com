import {
  app
} from '../main.js';


app.controller("MenuController",['$scope','$location',function($scope,$location) {
  var tThis = this;
  tThis.gli = "glyphicon glyphicon-align-justify";
  tThis.menuIsActive = false;
  tThis.menuIsActiveFunc = function() {
    tThis.menuIsActive = !tThis.menuIsActive;
  };
  $scope.go = function(path){
    tThis.menuIsActive = !tThis.menuIsActive;
    $location.path(path);
  };
}]);
