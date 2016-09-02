/**
 * Created by skerz on 02.09.16.
 */
// (function(){}(); on browser side not overwrite the global Scope
(function () {
    "use strict";

    angular
      .module('pizzaPalace', [
        'ui-router'
      ])
      .config (config);

    function config ($controllerProvider, $locationProvider){
        $controllerProvider.allowGlobals(); // Set all global
        $locationProvider.html5Mode(true); // delete hash-Tags of URL
    };

})();
