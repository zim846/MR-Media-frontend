'use strict';

mrmedia.controller('VerifyListCtrl',
  ['$scope','VerifySrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,VerifySrv,NoticeSrv, $uibModal, $state, UtilSrv) {

      $scope.payTypeTable = ['支付宝','银行'];
      $scope.statusTable = ['未审核','已审核','已拒绝'];

      var VerifyData = {
        actor: [{
          id: 0, //id
          name: "string", //真实姓名
          status: 0,//审核状态 0 未审核 1 已通过 2 已拒绝
          avatar: "http://112.74.50.130/back/images/icon.jpg", //头像url
          phone: "string",//手机号
          wechat: "string",//微信号
          father: "string",//经纪人
          idCard: "string",//身份证号
          location: "string",//所在地
          payType : 0,//0 支付宝 1 银行
          payAccount: "string",//支付帐号
          skills: [0,1,2,3,4],//技能 0 唱歌 1 跳舞 2 段子手 3 绘画 4 游戏
          idPics: ['http://112.74.50.130/back/images/idimg.jpg','http://112.74.50.130/back/images/idimg.jpg'],//身份证照片url
          photo: ['http://112.74.50.130/back/images/idimg.jpg','http://112.74.50.130/back/images/idimg.jpg','http://112.74.50.130/back/images/idimg.jpg']//照片url
        }],
        manager:[{
          id:0,
          name:"string",//姓名
          avatar: "http://112.74.50.130/back/images/icon.jpg", //头像url
          level: "string",//经纪人等级
          status: 0,//审核状态 0 未审核 1 已通过 2 已拒绝
          phone: "string",//手机号
          wechat: "string",//微信号
          father:"string",//上级经纪人
          idCard: "string",//身份证
          payType : 0,//支付方式
          payAccount: "string",//支付帐号
          idPics: ['http://112.74.50.130/back/images/idimg.jpg','http://112.74.50.130/back/images/idimg.jpg']//身份证照片url
        }]


      };

      /**
       *@description: 标签页切换
       *@param:
       */

      $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      });

      /**
       *@description: 删除主播
       *@param:
       */

      var DeleteId = {
        DeleteId : ''
      };

      $scope.showDeleteModal = function(id){
        anchorDeleteId.DeleteId = '';
        anchorDeleteId.DeleteId = id;
        $('#modifyDelete').modal('show');
      };

      $scope.comfirmDelete = function () {
        VerifySrv.deleteReview().add(DeleteId)
          .$promise.then(function (response) {
          if (response.errorCode === 0) {
            NoticeSrv.success("删除主播成功");
            getData();
            $('#modifyDelete').modal('hide');
          }},function (response) {
          NoticeSrv.error("删除主播错误,http状态码:"+response.status);
        });
      };


      /**
       *@description: 审核主播
       *@param:
       */

      var reviewData = {
        ReviewId : '',
        operation : ''
      };


      $scope.showManagerModal = function (item) {
        $scope.manager = Object.assign({},item);
        reviewData.ReviewId = item.id;
        $('#verifyManager').modal('show');


      };


      $scope.showAnchorModal = function (item) {
        $scope.actor = Object.assign({},item);
        reviewData.ReviewId = item.id;
        $('#verifyAnchor').modal('show');
      };


      $scope.submit = function () {
        reviewData.operation = 0;
        VerifySrv.reviewOperate().add(reviewData)
          .$promise.then(function (response) {
          if (response.errorCode === 0) {
            NoticeSrv.success("审核主播成功");
            getData();
            $('#verifyManager').modal('hide');
            $('#verifyAnchor').modal('hide');
          }},function (response) {
          NoticeSrv.error("审核主播错误,http状态码:"+response.status);
        });
      };

      $scope.refuse = function () {
        reviewData.operation = 1;
        VerifySrv.reviewOperate().add(reviewData)
          .$promise.then(function (response) {
          if (response.errorCode === 0) {
            NoticeSrv.success("审核主播成功");
            getData();
            $('#verifyManager').modal('hide');
            $('#verifyAnchor').modal('hide');
          }},function (response) {
          NoticeSrv.error("审核主播错误,http状态码:"+response.status);
        });
      };


      /**
       *@description: 获取所有主播审核
       *@param:
       */

      var getData = function (anchorDeleteId) {
        // VerifySrv.getList().get()
        //   .$promise.then(function (response) {
        //   if (response.errCode === 0) {
        //     console.log(response);
        //     $scope.managerrowCollection = response.agentReviewEntities;
        //   }},function (response) {
        //   NoticeSrv.error("获取所有审核错误,http状态码:"+response.status);
        // });
        $scope.managerCollection = VerifyData.manager;
        $scope.anchorCollection = VerifyData.actor;

      };

      getData();

    }]);
