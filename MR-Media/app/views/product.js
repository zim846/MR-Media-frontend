'use strict';

ysp.controller('ProductCtrl',
  ['$scope', 'ProductSrv','NoticeSrv', '$uibModal','$state','UtilSrv',
   function($scope,ProductSrv,NoticeSrv, $uibModal, $state,UtilSrv) {

     var productEdit ={
       productId: '',
       companyId: ''
     };

     var companyList ={};

     var modifyId ={
       companyId : ''
     };


     /**
      *@description: 获取产品列表
     */
     function getProduct(){
       ProductSrv.getProduct().get()
         .$promise.then(function (response) {
         if (response.errorCode === 0) {
           $scope.productCollection = response.productList;

         }},function (response) {
         NoticeSrv.error("获取产品列表错误,http状态码:"+response.status);
       });
     }

     getProduct();

     /**
      *@description: 获取公司列表
      */
     ProductSrv.getCompany().get()
       .$promise.then(function (response) {
       if (response.errorCode === 0) {
         $scope.companyCollection = response.companyList;
         companyList = response.companyList;
       }},function (response) {
       NoticeSrv.error("获取公司列表错误,http状态码:"+response.status);
     });

     /**
      *@description: 跳转到产品详情页
      *@param: id 产品id
      */
    $scope.gotoPage =function(id){
     $state.go('app.product.detail', {productid: id});
    };

     /**
      *@description:　根据批次数量判断是否可以删除产品
      *@param: id 产品id
      *@return: 是否为空
      */
     $scope.hasBatch = function(id){
       var returnValue = false;
       if(id===0){
         returnValue = true;
       }
       return returnValue;
     };

     /**
      *@description: 产品修改时显示原产品信息
      *@param: id 产品id
      */
     $scope.productEdit = function(id){
       productEdit.productId = id;
       ProductSrv.getProductDetail().get(productEdit)
         .$promise.then(function (response) {
         if (response.errorCode === 0) {
           $scope.editName = response.productName;
           $scope.editCode =response.productNumber;
           $scope.editCompany = response.companyName;
           $scope.editIntro = response.productIntro;
           $scope.updateName = response.productName;
           $scope.updateCode = response.productNumber;
           $scope.updateCompany = response.companyName;
           $scope.updateIntro = response.productIntro;
         }});
     };

     /**
      *@description: 创建产品
      */
     $scope.createProduct = function(){

       var reg = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6}$/;
       if(UtilSrv.nvl($scope.createName === "" )||UtilSrv.nvl($scope.createCode === "" )||UtilSrv.nvl($scope.createCompany === "" )) {
         NoticeSrv.error("产品名,产品编号或公司名不能为空");
       }
       else if(!reg.test($scope.createCode)){
         NoticeSrv.error("产品编号必须为由6位的字母加数字组合而成");
       }
       else{
         companyList.forEach(function (elem) {
           if($scope.createCompany === elem.companyName){
             productEdit.companyId = elem.companyId;
           }
         });
         var createData = {
           companyId: productEdit.companyId,//公司id
           productName : $scope.createName, //产品名
           productNumber : $scope.createCode, //产品编号
           productIntro : $scope.createIntro  //产品简介，v2新增
         };
         ProductSrv.createProduct().add(createData)
           .$promise.then(function (response) {
           if (response.errorCode === 0) {
             NoticeSrv.success("产品创建成功");
             getProduct();
             $('#createProduct').modal('hide');
           }},function (response) {
           NoticeSrv.error("创建产品错误,http状态码:"+response.status);
         });

       }

     };

     /**
      *@description: 修改产品
      */
     $scope.updateProduct = function(){
       var reg = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6}$/;
       if(UtilSrv.nvl($scope.updateCode === "") ||UtilSrv.nvl($scope.updateCompany === undefined) ||UtilSrv.nvl($scope.updateCompany === "")) {
         NoticeSrv.error("产品名,产品编号或公司名不能为空");
       }
       else if(!reg.test($scope.updateCode)){
         NoticeSrv.error("产品编号必须为由6位的字母加数字组合而成");
       }
       else{
         companyList.forEach(function (elem) {
           if($scope.updateCompany === elem.companyName){
             productEdit.companyId = elem.companyId;
           }
         });
         var modifyData =
         {
           productId : productEdit.productId, //产品id
           companyId: productEdit.companyId,//公司id
           productName : $scope.updateName, //产品名
           productNumber : $scope.updateCode, //产品编号
           productIntro : $scope.updateIntro  //产品简介，v2新增
         };
         ProductSrv.modifyProduct().add(modifyData)
           .$promise.then(function (response) {
           if (response.errorCode === 0) {
             NoticeSrv.success("产品修改成功");
             getProduct();
             $('#modifyProduct').modal('hide');
           }},function (response) {
           NoticeSrv.error("修改产品错误,http状态码:"+response.status);
         });

       }
     };

     /**
      *@description: 点击删除
      *@param: id 产品id
      */
     $scope.deleteProduct = function(id){
       modifyId.productId = id;
     };


     /**
      *@description: 点击确认删除
      */
     $scope.comfirmDelete = function(){
       ProductSrv.deleteProduct().remove(modifyId)
         .$promise.then(function (response) {
         if (response.errorCode === 0) {
           NoticeSrv.success("产品删除成功");
           getProduct();
           $('#modifyDelete').modal('hide');
         }

       },function (response) {
         NoticeSrv.error("删除公司错误,http状态码:"+response.status);
       });
     };

   }]);
