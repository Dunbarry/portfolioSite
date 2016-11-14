angular.module('personalApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/personal/index.template.html',
    controller: 'index'
  })
})
