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
  $state.go('app.home');
});

// mrmedia.run(['$rootScope', 'BackuserSrv', 'NoticeSrv', function($rootScope, BackuserSrv, NoticeSrv) {
//   $rootScope.$on('$stateChangeStart',
//   function(event, toState, toParams, fromState, fromParams, options){
//
//       console.log("checking your authority...");
//
//
//       function isAuthorized (state) {
//         var admin = BackuserSrv.getUser(),
//             taskGrps = [1, 3, 4, 5, 6, 7],
//             userGrps = [1, 2],
//             backuserGrps = [1, 2],
//             paymentGrps = [1, 8],
//             orderGrps = [1, 10],
//             shopGrps = [1, 16],
//             adGrps = [1, 11, 12, 13, 14, 15],
//
//
//             taskStates = ['app.task.list', 'app.task.edit', 'app.task.check', 'app.task.manage', 'app.task.publish', 'app.task.detail'],
//             userStates = ['app.user.list', 'app.user.create', 'app.user.edit', 'app.user.blacklist', 'app.user.detail'],
//             backuserStates = ['app.backuser.list', 'app.backuser.create', 'app.backuser.edit'],
//             paymentStates = ['app.cash-reconciliation', 'app.task-reconciliation', 'app.payment-detail', 'app.payment-single'],
//             orderStates = ['app.orders', 'app.order-settle'],
//             shopStates = ['app.item.edit', 'app.item.deliver', 'app.item.manage', 'app.item.detail'],
//             adStates = ['app.ad.list', 'app.ad.edit', 'app.ad.check', 'app.ad.manage', 'app.ad.publish', 'app.ad.detail'];
//
//             // 对于一个给定的状态，判断用户所在权限组是否有资格跳转，
//             // 若没有资格，则阻止跳转并提示
//             if (taskStates.indexOf(state) >= 0) {
//               return admin.groups.some(function(group) {
//                 return taskGrps.indexOf(group.id) >= 0;
//               });
//             } else if (userStates.indexOf(state) >= 0) {
//               return admin.groups.some(function(group) {
//                 return userGrps.indexOf(group.id) >= 0;
//               });
//             } else if (backuserStates.indexOf(state) >= 0) {
//               return admin.groups.some(function(group) {
//                 return backuserGrps.indexOf(group.id) >= 0;
//               });
//             } else if (paymentStates.indexOf(state) >= 0) {
//               return admin.groups.some(function(group) {
//                 return paymentGrps.indexOf(group.id) >= 0;
//               });
//             } else if (orderStates.indexOf(state) >= 0) {
//               return admin.groups.some(function(group) {
//                 return orderGrps.indexOf(group.id) >= 0;
//               });
//             } else if (shopStates.indexOf(state) >= 0) {
//               return admin.groups.some(function(group) {
//                 return shopGrps.indexOf(group.id) >= 0;
//               });
//             } else if (adStates.indexOf(state) >= 0) {
//               return admin.groups.some(function(group) {
//                 return adGrps.indexOf(group.id) >= 0;
//               });
//             } else {
//               return true;
//             }
//             return true;
//       }
//
//       if (!isAuthorized(toState.name)) {
//         event.preventDefault();
//         // transitionTo() promise will be rejected with
//         // a 'transition prevented' error
//         NoticeSrv.error("对不起，您没有权限访问该页面");
//       }
//
//
//
//   })
// }]);
mrmedia.config(function ($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise("/");
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
