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
mrmedia.value('baseURL', 'http://112.74.50.130');

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

    .state('app.managerdetail', {
      url: 'managerDetail',
      params:{"managerid":null},
      templateUrl: 'views/manager-detail.html',
      controller: 'ManagerDetailCtrl'
    })

    .state('app.anchorlist', {
      url: 'anchorList',
      templateUrl: 'views/anchor-list.html',
      controller: 'AnchorListCtrl'
    })

    .state('app.anchordetail', {
      url: 'anchorDetail',
      params:{"anchorid":null},
      templateUrl: 'views/anchor-detail.html',
      controller: 'AnchorDetailCtrl'
    })

    .state('app.verifylist', {
      url: 'verifyList',
      templateUrl: 'views/verify-list.html',
      controller: 'VerifyListCtrl'
    })

    .state('app.verifyStatus', {
      url: 'verifyStatus',
      templateUrl: 'views/verify-status.html',
      controller: 'VerifyStatusCtrl'
    })

    .state('app.settlement', {
      url: 'settlement',
      templateUrl: 'views/settlement.html',
      controller: 'SettlementCtrl'
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
