'use strict';

mrmedia.controller('ManagerListCtrl',
  ['$scope', 'AManagerSrv','NoticeSrv', '$uibModal','$state','UtilSrv','$http',
    function($scope,AManagerSrv,NoticeSrv, $uibModal, $state, UtilSrv,$http) {

      var token = '5258e46def87e29e1c7a2f7f2b3a4792';
      var managerList = {};
      $http.get(
        "http://10.60.36.16:8080/admin/employee/agents",{
        params: {
          token : token,
          pageId : 0,
          pageSize : 10000
        }
      }).then(function(data) {
        var a = data;
        //响应成功
        if (data.data.errCode == 0) {
          managerList = data.data.agents;
          $scope.managerCollection = managerList;
          console.log($scope.managerCollection);
        }else{
          alert('error');
          this.managerList = [];
        }
      });
      $scope.gotoDetailPage =function(id){
        $state.go('app.managerdetail', {managerid: id});
      };



    }]);
