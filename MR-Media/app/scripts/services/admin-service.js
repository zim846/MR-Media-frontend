/**
 * Created by MSI on 2017/3/29.
 */
'use strict';

mrmedia.service('AdminSrv', ['$resource','$http', 'baseURL' ,function ($resource, $http, baseURL) {

  //查看所有经纪人。
  this.getAgents = function(){
    return $resource(baseURL + '/admin/employee/agents?pageId=0&pageSize=10000');
  };

  //查看经纪人详情
  this.getAgentDetail = function(agentId){
    return $resource(baseURL + '/user/sub_employee/' + agentId, null, {'add':{ method:'POST' }});
  };

  //得到下属经纪人信息
  this.getSubAgents = function(agentId){
    return $resource(baseURL + '/user/' + agentId + '/sub_employees', null,{'add':{method: 'POST'}});
  };

  //得到下属主播信息
  this.getSubActors = function(agentId){
    return $resource(baseURL + '/user/' + agentId + '/sub_employees', null,{'add':{method: 'POST'}});
  };

  //查看所有主播
  this.getActors = function(){
    return $resource(baseURL + '/admin/employee/actors?pageId=0&pageSize=10000');
  };

  //查看主播详情
  this.getActorDetail = function(actorId){
    return $resource(baseURL + '/user/sub_employee/' + actorId, null, {'add':{ method:'POST' }});
  };

  //新增主播平台信息
  this.addActorPlatform = function(){
    return $resource(baseURL + '/user/add_platform', null, {'add':{ method:'POST' }});
  };

  //修改主播详情
  this.editActorInfo = function(actorId){
    return $resource(baseURL + '/actor/edit/' + actorId , null, {'add':{ method:'POST' }});
  }

  //添加结算表
  this.addSettleRecord = function(){
    return $resource(baseURL + '/settle/add' , null, {'add':{ method:'POST' }});
  }

}]);
