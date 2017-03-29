'use strict';

mrmedia.controller('AnchorDetailCtrl',
  ['$scope', 'AAnchorSrv','NoticeSrv', '$uibModal','$state','UtilSrv','$stateParams','$http','AdminSrv',
    function($scope,AAnchorSrv,NoticeSrv, $uibModal, $state, UtilSrv,$stateParams,$http,AdminSrv) {
      var anchorId = $stateParams.anchorid;
      var token = '5258e46def87e29e1c7a2f7f2b3a4792';
      var talents = ['吹','拉','弹','唱'];
      var settleType = ['支付宝','银行账号'];
      //get anchor info
      AdminSrv.getActorDetail(anchorId).add()
        .$promise.then(function(response){
        if(response.errCode === 0){
          NoticeSrv.success("成功");
          $scope.anchorName = response.employee.realName;
          $scope.anchorLevel = response.employee.level;
          $scope.anchorIcon = "../images/icon.jpg";
          $scope.anchorTel = response.employee.tel;
          $scope.anchorId = response.employee.idNumber;
          $scope.anchorFather = response.employee.parentName;
          $scope.anchorNotes = "一个辣鸡硕士";
          $scope.anchorWechat = response.employee.weChat;
          $scope.anchorLocation = response.employee.location;
          $scope.anchorPay = response.employee.settleCount;
          $scope.anchorType = settleType[response.employee.settleType];
          $scope.talentType = talents[response.employee.talentType];
          $scope.anchorCollection = response.platforms;
          $scope.anchorState = 1 - response.active;
        }else{
          NoticeSrv.error("失败");
        }
      });



      // var url = "http://10.60.36.16:8080/user/sub_employee/" + anchorId + "?token=" + token;
      // $http.post(url).then(function(response) {
      //   //响应成功
      //   var ancInfo = response.data;
      //   if (ancInfo.errCode == 0) {
      //     $scope.anchorName = ancInfo.employee.realName;
      //     $scope.anchorLevel = ancInfo.employee.level;
      //     $scope.anchorIcon = "../images/icon.jpg";
      //     $scope.anchorTel = ancInfo.employee.tel;
      //     $scope.anchorId = ancInfo.employee.idNumber;
      //     $scope.anchorFather = ancInfo.employee.parentName;
      //     $scope.anchorNotes = "一个辣鸡硕士";
      //     $scope.anchorWechat = ancInfo.employee.weChat;
      //     $scope.anchorPay = ancInfo.employee.settleCount;
      //     $scope.anchorCollection = ancInfo.platforms;
      //   }else{
      //     alert('error');
      //   }
      // });

      // $scope.anchorName = "张嘉琦";
      // $scope.anchorLevel = "S";
      // $scope.anchorIcon = "../images/icon.jpg";
      // $scope.anchorTel = "13666666666";
      // $scope.anchorId = "123456789012345678";
      // $scope.anchorFather = "秦博";
      // $scope.anchorNotes = "一个辣鸡硕士";
      // $scope.anchorWechat = 'qinbosv';
      // $scope.anchorPay = 'qinbosv';
       //$scope.anchorCollection = AAnchorSrv.anchorDList;
       $scope.imageCollection = AAnchorSrv.imageList;

      $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      });

      $scope.test = function (id,url) {
        console.log(id);
        if(((id + 1)% 4) === 0)
        {
          console.log(id);
          console.log(url);
          return true
        }
        else
          return false
      };

      $scope.editactor = function () {

      }

      $scope.add_platform_submit = function(){
        var platform = {
            name : $scope.platform.name,
            uid : anchorId,
            validDay : $scope.platform.validDay,
            validHour : $scope.platform.validHour,
            giftCount : $scope.platform.gift,
            settleCount : $scope.platform.count
        };

        //add platform
        AdminSrv.addActorPlatform().add(platform)
          .$promise.then(function(response){
          if(response.errCode === 0){
            NoticeSrv.success("成功");
          }else{
            NoticeSrv.error("失败");
          }
        });

        // var _url = "http://10.60.36.16:8080/user/add_platform?token=" + token;
        // $http.post(_url,platform).then(function(response) {
        //   //响应成功
        //   var ancInfo = response.data;
        //   if (ancInfo.errCode == 0) {
        //     alert('success');
        //   }else{
        //     alert('error');
        //   }
        // });
      };
      $scope.modify_submit = function(){
        var actor = {
          // 'active' : $scope.anchorState,
          'active' :1,
          'idNumber' : $scope.anchorId,
          'level':$scope.anchorLevel,
          'location': $scope.anchorLocation,
          'parentUid': $scope.anchorParentUid,
          'phoneNumber' : $scope.anchorTel,
          'realName' : $scope.anchorName,
          'settleAccount': $scope.anchorPay,
          'settleType': settleType.indexOf($scope.anchorType),
          'talentType': talents.indexOf($scope.talentType),
          'weChatNumber': $scope.anchorWechat
        }
        //edit actor
        AdminSrv.editActorInfo(anchorId).add(actor)
          .$promise.then(function(response){
          if(response.errCode === 0){
            NoticeSrv.success("成功");
          }else{
            NoticeSrv.error("失败");
          }
        });

      };

      $('.avatar-input').change(function(event) {
          // 根据这个 <input> 获取文件的 HTML5 js 对象
          var files = event.target.files, file;
          if (files && files.length > 0) {
            // 获取目前上传的文件
            file = files[0];
            // 来在控制台看看到底这个对象是什么
            console.log(file);
            // 那么我们可以做一下诸如文件大小校验的动作
            if(file.size > 1024 * 1024 * 2) {
              alert('图片大小不能超过 2MB!');
              return false;
            }
            console.log(file);
            // !!!!!!
            // 下面是关键的关键，通过这个 file 对象生成一个可用的图像 URL
            // 获取 window 的 URL 工具
            var URL = window.URL || window.webkitURL;
            // 通过 file 生成目标 url
            var imgURL = URL.createObjectURL(file);
            // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
            // URL.revokeObjectURL(imgURL);
            var urlString = imgURL.replace('blob:','');

            console.log($scope.anchorIcon);
          }
        });

      $scope.anchorAvatar  = "../images/icon.jpg";

      var option = {
        preview: '.avatar-preview',
        aspectRatio: 1
      }

      $('#avatarImg').cropper(option);

    }]);




