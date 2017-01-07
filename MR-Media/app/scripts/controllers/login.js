'use strict';
mrmedia.controller('LoginCtrl', ['$scope', 'BackuserSrv', 'NoticeSrv', 'TokenSrv', '$state',
function($scope, BackuserSrv, NoticeSrv, TokenSrv, $state) {
  $scope.admin = {
    // TODO: 写完之后改回来
    // "username": '',
    // "password": ''
    "username": '',
    "password": ''

  };

  $scope.login = function() {
    var admin = {
      username: $scope.admin.username,
      password: CryptoJS.SHA256($scope.admin.password).toString()
    };

    BackuserSrv.backuser().login(admin)
      .$promise.then(function(response) {
        if (response.errCode === 0) {
          TokenSrv.setToken(response.token);
          // console.log(response.token);
          // console.log(response.adminId);
          $scope.getUser(response.adminId);
          // $state.go('app.home');
        }
      }, function(response) {
        NoticeSrv.error("发生未知错误！");
      });
  };

  $scope.getUser = function(id) {
    BackuserSrv.backuser().get({adminId: id})
      .$promise.then(function(response) {
        if (response.errCode === 0) {
          console.log(response);
          BackuserSrv.setUser(response.admin);
          console.log(response.admin);
          NoticeSrv.success("登陆成功！");
          $state.go('app.home');
          // TODO: 写完之后改回来
          // $state.go('app.ad.list');
        }
      }, function(response) {
        NoticeSrv.error("发生未知错误！");
      });
  };

}]);
