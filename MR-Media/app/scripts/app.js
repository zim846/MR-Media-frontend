'use strict';

/**
 * @ngdoc overview
 * @name shuapiaoBackWebApp
 * @description
 * # shuapiaoBackWebApp
 *
 * Main module of the application.
 */

var mrmedia = angular.module('BackWebApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ui.router',
    'smart-table',
    'ngFileUpload',
    'ui.bootstrap'
]);
mrmedia.config(function($httpProvider) {
  $httpProvider.interceptors.push('myInterceptor');
});
mrmedia.value('baseURL', 'http://139.224.41.121:8090/back');

mrmedia.controller('MainCtrl', function ($state) {
  // $state.go('app.back.home');
});


mrmedia.config(function ($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'views/main.html'
    })


    .state('app.home', {
      url: 'home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'

    })

    .state('app.managerlist', {
      url: 'managerList',
      templateUrl: 'views/manager-list.html',
      controller: 'ManagerListCtrl'
    })

    .state('app.backuser', {
      url: 'backuser',
      templateUrl: 'views/backuser.html',
      controller: 'BackuserCtrl'
    })

    .state('app.modifyPWD', {
      url: 'modifyPWD',
      templateUrl: 'views/modify-pwd.html',
      controller: 'ModifyPWDCtrl'
    })

});
