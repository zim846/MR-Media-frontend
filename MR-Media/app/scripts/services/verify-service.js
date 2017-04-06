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


  var VerifyData = {
    actor: [{
      id: 0, //id
      name: "string", //真实姓名
      status: "string",//审核状态 0 未审核 1 已通过 2 已拒绝
      avatar: "http://112.74.50.130/back/images/icon.jpg", //头像url
      phone: "string",//手机号
      wechat: "string",//微信号
      father: "string",//经纪人
      idCard: "string",//身份证号
      location: "string",//所在地
      payType : 0,//0 支付宝 1 银行
      payAccount: "string",//支付帐号
      skills: [],//技能 0 唱歌 1 跳舞 2 段子手 3 绘画 4 游戏
      idPics: [],//身份证照片url
      photo: []//照片url
    }],
    manager:[{
      id:0,
      name:"string",//姓名
      avatar: "http://112.74.50.130/back/images/icon.jpg", //头像url
      level: "string",//经纪人等级
      phone: "string",//手机号
      wechat: "string",//微信号
      father:"string",//上级经纪人
      idCard: "string",//身份证
      payType : 0,//支付方式
      payAccount: "string",//支付帐号
      idPics: []//身份证照片url
    }]


  };

  var  manager= {
    id:0,//id
    type: 0,//0 主播 1 经纪人
    status : 0,//
    name:"string",//姓名
    phone: "string",//手机号
    wechat: "string",//微信号
    father:"string",//上级经纪人
    idCard: "string"//身份证号
  }


  var admin = {
    id:0,
    name:"string",//姓名
    phone: "string",//手机号
    auth:[] // 0 经纪人列表 1 主播列表 2 审核 3 结算
  };

}]);
