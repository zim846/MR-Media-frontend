'use strict';

mrmedia.controller('TestCtrl',
  ['$scope', 'AAnchorSrv','NoticeSrv', '$uibModal','$state','UtilSrv','$stateParams','$http','AdminSrv',
    function($scope,AAnchorSrv,NoticeSrv, $uibModal, $state, UtilSrv,$stateParams,$http,AdminSrv) {


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
          $('#avatarImg').cropper('replace',imgURL);
        }
      });



      $scope.showModal = function(){
        $('#avatar-modal').modal('show');

        var option = {

          preview: '.avatar-preview',
          aspectRatio: 1,
          strict: false,
          crop: function(data) {
          }
        };

        $('#avatarImg').cropper(option);




      };

      $scope.save = function(){

        var dataurl = $('#avatarImg').cropper('getCroppedCanvas').toDataURL('image/png');
        console.log(dataurl);
      };


      $scope.rotate_left =function () {
        $('#avatarImg').cropper("rotate",-90);
      };

      $scope.rotate_right =function () {
        $('#avatarImg').cropper("rotate",90);
      };



    }]);




