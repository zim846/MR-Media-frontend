'use strict';

mrmedia.controller('VerifyStatusCtrl',
  ['$scope','VerifySrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,VerifySrv,NoticeSrv) {

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

      /**
       *@description: 获取所有主播审核
       *@param:
       */

      var getData = function () {
        VerifySrv.gerManagerReviewList().get()
          .$promise.then(function (response) {
          if (response.errCode === 0) {
            console.log(response);
            $scope.verifyCollection = response.VerifyData;
          }},function (response) {
          NoticeSrv.error("获取审核错误,http状态码:"+response.status);
        });

      };


      getData();


    }]);
