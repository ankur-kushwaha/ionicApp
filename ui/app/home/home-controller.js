/* global Firebase*/
(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($firebaseArray) {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    
   // vm.items=['hello','bye'];
    
      var ref = new Firebase('https://monitoring.firebaseio.com');
  // download the data into a local object
      vm.items= $firebaseArray(ref);
  }
}());
