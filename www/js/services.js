var adminURL = "http://146.148.42.15:83/api/";
// var adminURL = "http://192.168.0.104:1337/api/";
var uploadurl = adminURL + "upload/";
angular.module('starter.services', [])

.factory('imageUpload', function ($http) {
  return {
    imageUpload: function () {
      return imageUpload;
    },
    updateProfilePicture: function (request,callback,err) {
      $http({
                url: adminURL + 'student/updateProfilePicture',
                method: 'POST',
                data: request
            }).success(callback).error(err);
    }
  };
});
