/**
 * Created by skerz on 02.09.16.
 */
(function () {
    "use strict";

    angular
      .module('pizzaPalace')
      .config(['$stateProvider', '$urlRouterProvider', config]);


    function config ($stateProvider, $urlRouterProvider) {
        // if some Url not match with Web Route set default
        $urlRouterProvider.otherwise('/');


        // set Web Routes of Web page
        $stateProvider
            .state('landing', {
                url:'/',
                templateUrl: 'app/core/landing/landing.html',
                controller: 'LandingCtrl',
                controllerAs: 'landingVm'
            })
            .state('register', {
                url:'/register',
                templateUrl: 'app/components/register/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'registerVm'
            })
            .state('account', {
                url:'/account',
                templateUrl: 'app/components/account/account.html',
                controller: 'AccountCtrl',
                controllerAs: 'accountVm'
            })
            .state ('shoppingcard', {
                url: '/account/shoppoingcard',
                templateUrl: 'app/components/account/shoppingcard/shoppingcard.html',
                controller: 'ShoppingCardCtrl',
                controllerAs: 'shoppingcardVm'
            });
    }
})();
