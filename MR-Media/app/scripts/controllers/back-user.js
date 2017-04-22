'use strict';

mrmedia.controller('BackuserCtrl',
  ['$scope', 'BackUserSrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,BackUserSrv,NoticeSrv, $uibModal, $state, UtilSrv) {

      $scope.authTable = ['经纪人列表','主播列表','审核','结算'];
      $scope.authCollection = [0,1,2,3];
      var admin = {
        id:0,
        name:"string",//姓名
        phoneNumber: "string",//手机号
        authorities:[0,1] // 0 经纪人列表 1 主播列表 2 审核 3 结算
      };

      $scope.admin = {
        id : '',
        name : "",//姓名
        userName : "",
        password:'',
        phoneNumber: "",//手机号
        authorities:[] // 0 经纪人列表 1 主播列表 2 审核 3 结算
      };

      $scope.deleteId = {id : ''};

      //选择

      $scope.selected = [];

      $scope.toggle = function (item, list) {
        console.log(list);
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };

      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };

      /**
       *@description: 获取所有管理员
       *@param:
       */
      var getData = function (anchorDeleteId) {
        BackUserSrv.getList().get()
          .$promise.then(function (response) {
          console.log(response);
          if (response.errCode === 0) {

            $scope.backuserCollection = response.admin;
          }},function (response) {
          NoticeSrv.error("获取所有管理员错误,http状态码:"+response.status);
        });


      };

      getData();

      $scope.regex = '\\d+';

      $scope.test = function (s1s) {
        console.log(s1s);
      };


      $scope.modalName = '';

      /**
       *@description: 编辑管理员
       *@param:
       */

      $scope.editUserModalShow = function (item) {
        $scope.admin = {
          id: '',
          name:"",//姓名
          userName:"",
          password:'',
          phoneNumber: "",//手机号
          authorities:[] // 0 经纪人列表 1 主播列表 2 审核 3 结算
        };
        console.log(item);
        $scope.selected = [];
        $scope.modalName = '修改管理员';
        $scope.admin = Object.assign({},item);
        $scope.admin.phoneNumber = item.phone;
        $scope.admin.userName = item.username;
        $scope.selected = item.auth.concat();
        console.log($scope.selected);
        $('#editUser').modal('show');
      };

      /**
       *@description: 删除管理员
       *@param:
       */

      $scope.deleteModalShow = function (item) {
        $scope.deleteId.id = item.id;
        $('#modifyDelete').modal('show');
      };


      $scope.comfirmDelete = function () {
        BackUserSrv.deleteUser().add($scope.deleteId)
          .$promise.then(function (response) {
          if (response.errCode === 0) {
            NoticeSrv.success("删除管理员成功");
            getData();
            $('#modifyDelete').modal('hide');
          }},function (response) {
          NoticeSrv.error("删除管理员错误,http状态码:"+response.status);
        });
      };

      /**
       *@description: 新建管理员
       *@param:
       */

      $scope.newUserModalShow = function (item) {
        $scope.admin = {
          id: -1,
          name:"",//姓名
          userName:"",
          password:'',
          phoneNumber: "",//手机号
          authorities:[] // 0 经纪人列表 1 主播列表 2 审核 3 结算
        };
        $scope.selected = [];
        $scope.modalName = '新建管理员';
        $('#editUser').modal('show');
      };

      $scope.user_submit = function(){
        $scope.admin.authorities = $scope.selected;
        console.log($scope.admin);
        BackUserSrv.newUser().add($scope.admin)
          .$promise.then(function (response) {
          if (response.errCode === 0) {
            NoticeSrv.success("创建管理员成功");
            getData();
            $('#editUser').modal('hide');
          }},function (response) {
          NoticeSrv.error("创建管理员错误,http状态码:"+response.status);
        });
      };


      }]);
