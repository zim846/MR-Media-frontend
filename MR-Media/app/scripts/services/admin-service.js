/**
 * Created by MSI on 2017/3/29.
 */
'use strict';

mrmedia.service('AdminSrv', ['$resource','$http', 'baseURL' ,function ($resource, $http, baseURL) {

  //查看所有经纪人。
    this.getAgents = function(){
      return $resource(baseURL + '/admin/employee/agents?pageId=0&pageSize=10000');
    };

}]);
