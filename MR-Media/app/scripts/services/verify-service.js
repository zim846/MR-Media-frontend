'use strict';

mrmedia.service('VerifySrv', ['$resource','$http', 'baseURL' ,function ($resource, $http, baseURL) {


  //查看所有主播
  this.getList = function(){
    return $resource(baseURL + '/review/all?pageId=0&pageSize=10000');
  };

  //删除审核
  this.deleteReview = function() {
    return $resource(baseURL + '/review/:DeleteId/delete', {DeleteId: "@DeleteId"}, {'add': {method: 'POST'}});
  };

  //审核
  this.reviewOperate = function() {
    return $resource(baseURL + '/review/:ReviewId/operate', {DeleteId: "@ReviewId"}, {'add': {method: 'POST'}});
  };

  //审核
  this.gerManagerReviewList = function() {
    return $resource(baseURL + '/agent/reviews');
  };


}]);
