'use strict';

mrmedia.controller('VerifyListCtrl',
  ['$scope','AManagerSrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,AManagerSrv,NoticeSrv, $uibModal, $state, UtilSrv) {


      $scope.managerName = "张嘉琦";
      $scope.managerLevel = "5";
      $scope.managerIcon = "../images/icon.jpg";
      $scope.managerTel = "13666666666";
      $scope.managerId = "123456789012345678";
      $scope.managerFather = "秦博";
      $scope.managerNotes = "一个辣鸡硕士";
      $scope.managerWechat = 'qinbosv';
      $scope.managerPay = 'qinbosv';
      $scope.managerCollection = AManagerSrv.managerList;
      $scope.anchorCollection = AManagerSrv.managerList;
      $scope.managerIDImg = "../images/idimg.jpg";


      $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      });

      $scope.showManagerModal = function () {
        $('#verifyManager').modal('show');
      };

      $scope.showAnchorModal = function () {
        $('#verifyAnchor').modal('show');
      };

    }]);
