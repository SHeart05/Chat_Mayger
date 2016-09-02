(function () {
    'use strict';

    angular
      .module('pizzaPalace')
      .controller('LandingCtrl', LandingCtrl);

    function LandingCtrl(){
      var vm = this;

      vm.person = null;
    }

})();
