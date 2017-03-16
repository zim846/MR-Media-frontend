'use strict';

mrmedia.controller('AnchorListCtrl',
  ['$scope', 'AAnchorSrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,AAnchorSrv,NoticeSrv, $uibModal, $state, UtilSrv) {
      $scope.anchorCollection = AAnchorSrv.managerList;
      console.log($scope.managerCollection);

      $scope.gotoDetailPage =function(id){
        $state.go('app.anchordetail', {anchorid: id});
      };


    }]);
