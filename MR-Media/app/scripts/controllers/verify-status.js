'use strict';

mrmedia.controller('VerifyStatusCtrl',
  ['$scope','VerifySrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,VerifySrv,NoticeSrv, $uibModal, $state, UtilSrv) {

      $scope.typeTable = ['主播','经纪人'];
      $scope.statusTable = ['未审核','已审核','已拒绝'];

     var verifyData =[{
        id:0,//id
        type: 0,//0 主播 1 经纪人
        status : 0,//
        name:"string",//姓名
        phone: "string",//手机号
        wechat: "string",//微信号
        father:"string",//上级经纪人
        idCard: "string"//身份证号
      }];

      $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      });

      var getData =function () {
        $scope.verifyCollection = verifyData;
      };

      getData();


    }]);
