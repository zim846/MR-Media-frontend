'use strict';

mrmedia.controller('SidebarCtrl', ['$scope', 'SidebarSrv', 'NoticeSrv',
 function($scope, SidebarSrv, NoticeSrv) {

  $scope.userIcon = "http://v2.freep.cn/3tb_170108150034cycw512293.jpg";

   $scope.adminMenu = [
     {
       active: '',
       icon: 'fa fa-circle-o',
       name: '经纪人列表',
       url: "app.company.list"
     },
     {
       active: '',
       icon: 'fa fa-circle-o',
       name: '艺人列表',
       url: "app.product.list"
     },
     {
       active: '',
       icon: 'fa fa-circle-o',
       name: '结算',
       url: "app.query.list"
     },
     {
       active: '',
       icon: 'fa fa-circle-o',
       name: '考核',
       url: "app.backuser"
     },
     {
       active: '',
       icon: 'fa fa-circle-o',
       name: '参数设置',
       url: "app.login"
     },
     {
       active: '',
       icon: 'fa fa-circle-o',
       name: '管理员设置',
       url: "app.login"
     }
   ];

   $scope.managerMenu = [
     {
       active: '',
       icon: 'fa fa-circle-o',
       name: '下属经纪人管理',
       url: "app.login"
     },
     {
       active: '',
       icon: 'fa fa-circle-o',
       name: '下属艺人管理',
       url: "app.login"
     }
   ];

   $scope.menu_active = function(index){
     $scope.menu.forEach(function(elem,i){
       elem.active = "";
       if(index===i){
         elem.active = "active";
       }
     })
   };
  // $scope.isCollapsed = true;
  // $scope.sidebarList = SidebarSrv.getSidebar();
  // $scope.sidebar = [];
  // $scope.groups = [];
  // $scope.groupIds = [];
  // $scope.authorities = [];
  // $scope.sidebarIdx = [];
  //
  // $scope.setSidebar = function() {
  //   console.log($scope.groups);
  //   $scope.userInfo = BackuserSrv.getUser();
  //   console.log($scope.userInfo);
  //
  //   if ($scope.userInfo) {
  //     console.log($scope.userInfo);
  //     for(var i = 0; i<$scope.userInfo.groups.length; i++) {
  //       $scope.groupIds.push($scope.userInfo.groups[i].id);
  //     }
  //     console.log($scope.groupIds);
  //
  //
  //
  //     for (var i = 0; i < $scope.groupIds.length; i++) {
  //       console.log($scope.groupIds[i]);
  //       for (var j = 0; j < $scope.groups.length; j++) {
  //         console.log($scope.groups[j]);
  //         if ($scope.groups[j].id === $scope.groupIds[i]) {
  //           $scope.tempAuthorities = $scope.groups[j].authorities;
  //           console.log($scope.tempAuthorities);
  //           for (var k = 0; k < $scope.tempAuthorities.length; k++) {
  //             if ($scope.authorities.indexOf($scope.tempAuthorities[k].id) === -1) {
  //               $scope.authorities.push($scope.tempAuthorities[k].id);
  //             }
  //           }
  //         }
  //       }
  //     }
  //     console.log($scope.authorities);
  //     //权限管理，权限编号所对应的菜单id，id=0用户管理，id=1任务管理，id=2工单审核，id=3支付管理，id=4任务管理，id=5商城管理，id=6广告管理
  //     for (var i = 0; i < $scope.authorities.length; i++) {
  //       var idx = -1;
  //       switch ($scope.authorities[i]) {
  //         case 1:
  //         idx = 0;
  //         break;
  //         case 2:
  //         idx = 4;
  //         break;
  //         case 3:
  //         idx = 2;
  //         break;
  //         case 4:
  //         idx = 3;
  //         break;
  //         case 5:
  //         idx = 1;
  //         break;
  //         case 6:
  //         idx = 1;
  //         break;
  //         case 7:
  //         idx = 1;
  //         break;
  //         case 8:
  //         idx = 1;
  //         break;
  //         case 9:
  //         idx = 7;
  //         break;
  //         case 10:
  //         idx = 6;
  //         break;
  //         case 11:
  //         idx = 6;
  //         break;
  //         case 12:
  //         idx = 6;
  //         break;
  //         case 13:
  //         idx = 6;
  //         break;
  //         case 14:
  //         idx = 5;
  //         break;
  //       }
  //       console.log(idx);
  //       if ($scope.sidebarIdx.indexOf(idx) > -1) {
  //
  //       }else {
  //         $scope.sidebarIdx.push(idx);
  //       }
  //     }
  //     $scope.sidebarIdx.sort();
  //
  //     for (var i = 0; i < $scope.sidebarIdx.length; i++) {
  //       $scope.sidebar.push($scope.sidebarList[$scope.sidebarIdx[i]]);
  //     }
  //   }
  // }
  //
  // $scope.getGroups = function() {
  //   // return BackuserSrv.group().groups;
  //   BackuserSrv.group().get({"groupId": "all"})
  //   .$promise.then(function(response) {
  //     if (response.errCode === 0) {
  //       NoticeSrv.success("获取权限组成功");
  //       $scope.groups = response.groups;
  //       $scope.setSidebar();
  //       console.log($scope.groups);
  //     }
  //   }, function(response) {
  //     NoticeSrv.error("获取权限组失败");
  //   });
  // };
  // $scope.getGroups();
}]);
