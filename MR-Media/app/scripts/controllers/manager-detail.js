'use strict';

mrmedia.controller('ManagerDetailCtrl',
  ['$scope', 'AManagerSrv','NoticeSrv', '$uibModal','$state','UtilSrv','$stateParams','$http',
    function($scope,AManagerSrv,NoticeSrv, $uibModal, $state, UtilSrv,$stateParams,$http) {
      var managerId = $stateParams.managerid;
      var token = '5258e46def87e29e1c7a2f7f2b3a4792';
      //get manager info
      var url = "http://10.60.36.16:8080/user/sub_employee/" + managerId + "?token=" + token;
      $http.post(
        url).then(function(response) {
        //响应成功
        var manInfo = response.data;
        if (manInfo.errCode == 0) {
          $scope.managerName = manInfo.employee.realName;
          $scope.managerLevel = manInfo.employee.level;
          $scope.managerIcon = "../images/icon.jpg";
          $scope.managerTel = manInfo.employee.tel;
          $scope.managerId = manInfo.employee.idNumber;
          $scope.managerFather = manInfo.employee.parentName;
          $scope.managerNotes = "一个辣鸡硕士";
          $scope.managerWechat = manInfo.employee.weChat;
          $scope.managerPay = manInfo.employee.settleCount;
        }else{
          alert('error');
        }
      });

      var _url = "http://10.60.36.16:8080/user/" + managerId + "/sub_employees?token=" + token;
      $http.post(_url,{
          authority :　2
      }).then(function(response) {
        //响应成功
        var manInfo = response.data;
        if (manInfo.errCode == 0) {
          $scope.subManager = manInfo.employees;
        }else{
          alert('error');
        }
      });

      var __url = "http://10.60.36.16:8080/user/" + managerId + "/sub_employees?token=" + token;
      $http.post(__url,{
        authority :　3
      }).then(function(response) {
        //响应成功
        var manInfo = response.data;
        if (manInfo.errCode == 0) {
          $scope.subActor = manInfo.employees;
        }else{
          alert('error');
        }
      });
      

      $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      });

    }]);
