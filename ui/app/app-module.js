(function () {
  'use strict';

  /* @ngdoc object
   * @name ui
   * @description
   *
   */
  angular
    .module('ui', [
      'ui.router',
      'ui.bootstrap','ionic','ngCordova','firebase',
      'home'
    ])
.run(function($ionicPlatform,$window) {
  $ionicPlatform.ready(function() {
    if($window.cordova && $window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      var cordova=$window.cordova;

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if($window.StatusBar) {
      $window.StatusBar.styleDefault();
    }
  });
});

}());
