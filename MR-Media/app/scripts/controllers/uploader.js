'use strict';
mrmedia.controller('UploadCtrl', [
        '$scope',
        '$uibModalInstance',
        'UploadSrv',
        'ErrorSrv',
        'options',
        '$rootScope',
        function ($scope, $uibModalInstance, UploadSrv, ErrorSrv, options, $rootScope) {
        $scope.file = null;
        $scope.options = options;
        $scope.status = {
            isUploading: false,
            progress: 0,
            uploadMsg: "正在上传，请稍后...",
            isError: false,
            errorMsg: "发生错误，请重新尝试！"
        };


        $scope.submit = function () {
                $scope.status.isUploading = true;
                // var formDate=new FormData();
                // formDate.append('image',$scope.file);
                // ItemSrv.upload().upload({'formDate':formDate}).$promise.then(function(response){
                //     console.log(response);
                //     $scope.ok(response.url);
                // },function(error){
                //     console.log(error);
                // });

                UploadSrv.upload($scope.file, options)

                .progress(function (evt) {
                    $scope.status.progress = parseInt(100.0 * evt.loaded / evt.total);
                })

                .success(function(data) {
                    console.log(data);
                    if (data.errCode === 0) {
                        $scope.status.isError = false;
                        $scope.status.isUploading = false;
                        $scope.ok(data.url);
                    } else {
                        $scope.status.isError = true;
                        $scope.status.errorMsg = ErrorSrv.getError(data.errCode);
                    }
                }).error(function(data) {
                    console.log(data);
                    $scope.status.isUploading = false;
                    $scope.status.isError = true;
                    $scope.status.errorMsg = "发生错误，请重新尝试！";
                });
        } ;

        $scope.ok = function (url) {
            $uibModalInstance.close(url);

        };

        $scope.cancel = function () {
            console.log('cancel');
            // $rootScope.testpic='../images/Logo.png';
            $uibModalInstance.dismiss('cancel');
            // $uibModalInstance.close('../images/Logo.png');
        };
    }]);
