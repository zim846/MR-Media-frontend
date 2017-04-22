'use strict';

mrmedia.service('BackUserSrv', ['$resource','$http', 'baseURL' ,function ($resource, $http, baseURL) {


  //查看所管理员
  this.getList = function(){
    return $resource(baseURL + '/admin/all?pageId=0&pageSize=10000');
  };

  //删除审核
  this.deleteReview = function() {
    return $resource(baseURL + '/review/:DeleteId/delete', {DeleteId: "@DeleteId"}, {'add': {method: 'POST'}});
  };

  //新建管理员
  this.newUser = function() {
    return $resource(baseURL + '/admin/saveOrUpdate', null, {'add': {method: 'POST'}});
  };

  //删除管理员
  this.deleteUser = function() {
    return $resource(baseURL + '/admin/delete', null, {'add': {method: 'POST'}});
  };

}]);
