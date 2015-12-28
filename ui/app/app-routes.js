(function () {
  'use strict';

  angular
    .module('ui')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
