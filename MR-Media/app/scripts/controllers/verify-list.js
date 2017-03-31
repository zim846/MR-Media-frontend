'use strict';

mrmedia.controller('VerifyListCtrl',
  ['$scope','VerifySrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,VerifySrv,NoticeSrv, $uibModal, $state, UtilSrv) {

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
        $scope.managerName = item.agent.realName;
        $scope.managerLevel = item.agent.agent.level;
        $scope.managerIcon = item.agent.avtar;
        $scope.managerTel =item.agent.phoneNumber;
        $scope.managerId = item.agent.agent.idNumber;
        $scope.managerFather = item.review.superUser.realName;
        $scope.managerWechat = item.agent.wechat;
        if(item.agent.settleType === 0){
          $scope.managerPayType = '支付宝';
        }else {
          $scope.managerPayType = '银行卡';
        }
        $scope.managerPay = item.agent.settleAccount;

        $scope.managerIDImgCollection = item.idPictures;
        reviewData.ReviewId = item.id;
        $('#verifyManager').modal('show');


      };

      $scope.showAnchorModal = function (item) {
        $scope.anchorName = item.actor.realName;
        $scope.anchorLevel = item.actor.actor.level;
        $scope.anchorIcon = item.actor.avtar;
        $scope.anchorTel =item.actor.phoneNumber;
        $scope.anchorId = item.actor.actor.idNumber;
        $scope.anchorFather = item.review.superUser.realName;
        $scope.anchorWechat = item.actor.wechat;
        if(item.actor.settleType === 0){
          $scope.anchorPayType = '支付宝';
        }else {
          $scope.anchorPayType = '银行卡';
        }
        $scope.anchorPay = item.actor.settleAccount;
        $scope.anchorIDImgCollection = item.idPictures;
        $scope.skillCollection = item.actor.talentType;
        $scope.anchorLocation = item.actor.location;
        $scope.anchorIDImg1 = item.pictures[1];
        $scope.anchorIDImg2 = item.pictures[2];
        $scope.anchorIDImg3 = item.pictures[3];
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
        VerifySrv.getList().get()
          .$promise.then(function (response) {
          if (response.errCode === 0) {
            console.log(response);
            $scope.managerrowCollection = response.agentReviewEntities;
          }},function (response) {
          NoticeSrv.error("获取所有审核错误,http状态码:"+response.status);
        });

      };

      getData();

    }]);
