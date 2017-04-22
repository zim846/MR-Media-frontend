'use strict';

mrmedia.controller('VerifyListCtrl',
  ['$scope','VerifySrv','NoticeSrv', '$uibModal','$state','UtilSrv',
    function($scope,VerifySrv,NoticeSrv) {

      $scope.payTypeTable = ['支付宝','银行'];
      $scope.statusTable = ['未审核','已审核','已拒绝'];


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

      var getData = function () {
        VerifySrv.getList().get()
          .$promise.then(function (response) {
          if (response.errCode === 0) {
            console.log(response);
            $scope.managerrowCollection = response.VerifyData.manager;
            $scope.anchorCollection = response.VerifyData.actor;
          }},function (response) {
          NoticeSrv.error("获取所有审核错误,http状态码:"+response.status);
        });

      };

      getData();

    }]);
