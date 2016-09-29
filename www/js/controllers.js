angular.module('starter.controllers', ['ngCordova'])

.controller('ImageUploadCtrl', function ($scope, $cordovaCamera) {
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
});