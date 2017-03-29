'use strict';

mrmedia.controller('ManagerDetailCtrl',
  ['$scope', 'AManagerSrv','NoticeSrv', '$uibModal','$state','UtilSrv','$stateParams','$http','AdminSrv',
    function($scope,AManagerSrv,NoticeSrv, $uibModal, $state, UtilSrv,$stateParams,$http,AdminSrv) {
      var managerId = $stateParams.managerid;
      var token = '0c64afc62225428174c73b3cc459f519';
      //get manager info
      var url = "http://10.60.36.16:8080/user/sub_employee/" + managerId + "?token=" + token;

      //get agentDetail
      AdminSrv.getAgentDetail(managerId).add()
        .$promise.then(function(response){
        if(response.errCode === 0){
          NoticeSrv.success("成功");
          $scope.managerName = response.employee.realName;
          $scope.managerLevel = response.employee.level;
          $scope.managerIcon = "../images/icon.jpg";
          $scope.managerTel = response.employee.tel;
          $scope.managerId = response.employee.idNumber;
          $scope.managerFather = response.employee.parentName;
          $scope.managerNotes = "一个辣鸡硕士";
          $scope.managerWechat = response.employee.weChat;
          $scope.managerPay = response.employee.settleCount;
        }else{
          NoticeSrv.error("失败");
        }
      });


      // $http.post(
      //   url).then(function(response) {
      //   //响应成功
      //   var manInfo = response.data;
      //   if (manInfo.errCode == 0) {
      //     $scope.managerName = manInfo.employee.realName;
      //     $scope.managerLevel = manInfo.employee.level;
      //     $scope.managerIcon = "../images/icon.jpg";
      //     $scope.managerTel = manInfo.employee.tel;
      //     $scope.managerId = manInfo.employee.idNumber;
      //     $scope.managerFather = manInfo.employee.parentName;
      //     $scope.managerNotes = "一个辣鸡硕士";
      //     $scope.managerWechat = manInfo.employee.weChat;
      //     $scope.managerPay = manInfo.employee.settleCount;
      //   }else{
      //     alert('error');
      //   }
      // });
      //get subAgents
      AdminSrv.getSubAgents(managerId).add({'role':2})
        .$promise.then(function(response){
        if(response.errCode === 0){
          NoticeSrv.success("成功");
          $scope.subManager = response.employees;
        }else{
          NoticeSrv.error("失败");
        }
      });
      //
      // var _url = "http://10.60.36.16:8080/user/" + managerId + "/sub_employees?token=" + token;
      // $http.post(_url,{
      //     role :　2
      // }).then(function(response) {
      //   //响应成功
      //   var manInfo = response.data;
      //   if (manInfo.errCode == 0) {
      //     $scope.subManager = manInfo.employees;
      //   }else{
      //     alert('error');
      //   }
      // });

      //get subActors
      AdminSrv.getSubActors(managerId).add({'role':3})
        .$promise.then(function(response){
        if(response.errCode === 0){
          NoticeSrv.success("成功拿到下属主播");
          $scope.subActor = response.employees;
        }else{
          NoticeSrv.error("失败");
        }
      });

      // var __url = "http://10.60.36.16:8080/user/" + managerId + "/sub_employees?token=" + token;
      // $http.post(__url,{
      //   role :　3
      // }).then(function(response) {
      //   //响应成功
      //   var manInfo = response.data;
      //   if (manInfo.errCode == 0) {
      //     $scope.subActor = manInfo.employees;
      //   }else{
      //     alert('error');
      //   }
      // });


      $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      });

    }]);
