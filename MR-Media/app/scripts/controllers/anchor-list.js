'use strict';

mrmedia.controller('AnchorListCtrl',
  ['$scope', 'AAnchorSrv','NoticeSrv', '$uibModal','$state','UtilSrv','$http',
    function($scope,AAnchorSrv,NoticeSrv, $uibModal, $state, UtilSrv,$http) {

      var token = '5258e46def87e29e1c7a2f7f2b3a4792';
      var activeList = ['在播','不在播'];
      var anchorList = {};
      $http.get(
        "http://10.60.36.16:8080/admin/employee/actors",{
          params: {
            token : token,
            pageId : 0,
            pageSize : 10000
          }
        }).then(function(data) {
        //响应成功
        if (data.data.errCode == 0) {
          anchorList = data.data.actors;
          anchorList.forEach(function(anchor){
            anchor.active = activeList[anchor.active]; 
          })
          $scope.anchorCollection = anchorList;
          console.log($scope.anchorCollection);
        }else{
          alert('error');
        }
      });

      //$scope.anchorCollection = AAnchorSrv.managerList;
      //console.log($scope.managerCollection);

      $scope.gotoDetailPage =function(id){
        $state.go('app.anchordetail', {anchorid: id});
      };


    }]);
