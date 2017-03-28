'use strict';

mrmedia.controller('BackuserCtrl',
  ['$scope', 'AManagerSrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,AManagerSrv,NoticeSrv, $uibModal, $state, UtilSrv) {
      $scope.backuserCollection = AManagerSrv.managerList;
      console.log($scope.managerCollection);

      $scope.gotoDetailPage =function(id){
        $state.go('app.managerdetail', {managerid: id});
      };



    }]);
