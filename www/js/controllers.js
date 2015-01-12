angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];

    var index = 7;
    $scope.doRefresh = function () {
      var i = index++;
      $scope.playlists.unshift({title: "new" + i, id: i});
      $scope.$broadcast('scroll.refreshComplete');
    }
  })

  .controller('PlaylistCtrl', function ($scope, $ionicActionSheet) {
    //alert(angular.element("ion-slide-box"));
    //alert(angular.element(document.querySelector("#aaa")).append("<h1>adfsdf</h1>"))
    ionic.DomUtil.ready(function(){
    })

    $scope.openPopover = function() {
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          alert(index)
          return true;
        },
        destructiveButtonClicked: function(){
          alert("删除啦")
        }
      });

      // For example's sake, hide the sheet after two seconds
      //$timeout(function() {
      //  hideSheet();
      //}, 6000);
    };
  })

  .controller('BrowseCtrl', function ($scope,$cordovaCamera) {
    $scope.imgsrc = "img/delorean.jpg";
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $scope.getPicture = function(){
      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.imgsrc = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    }
  })

  .controller('SearchCtrl', function ($scope,$cordovaBarcodeScanner) {

    $scope.scan = function(){
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          alert(JSON.stringify(barcodeData));
        }, function(error) {
          // An error occurred
        });
    }

  })


;
