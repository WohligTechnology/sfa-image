angular.module('starter.controllers', ['ngCordova'])

.controller('ImageUploadCtrl', function ($scope, $cordovaCamera, $timeout, $ionicPopup) {

  $scope.openLibrary = function () {
    var libraryOptions = {
      quality: 90,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: false,
      encodingType: 0,
      targetWidth: 1200,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    $cordovaCamera.getPicture(libraryOptions).then(function (imageData) {
      $scope.imageSrc = "data:image/jpeg;base64," + imageData;
      console.log($scope.imageSrc);
    }, function (err) {
      console.log(err);
    });
  };

  $scope.uploadSuccess = function () {
    $scope.data = {};
    var myPopup = $ionicPopup.show({
      template: '<div class="text-center"><h1 class="icon ion-checkmark-circled balanced"></h1></div>',
      title: 'Image Uploaded',
      subTitle: 'Image succesfully uploaded',
      scope: $scope,
      buttons: []
    });

    $timeout(function () {
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };

});