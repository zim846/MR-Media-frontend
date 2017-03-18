'use strict';

mrmedia.controller('ManagerListCtrl',
  ['$scope', 'AManagerSrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,AManagerSrv,NoticeSrv, $uibModal, $state, UtilSrv) {
      $scope.managerCollection = AManagerSrv.managerList;
      console.log($scope.managerCollection);

      $scope.gotoDetailPage =function(id){
        $state.go('app.managerdetail', {managerid: id});
      };



    }]);
