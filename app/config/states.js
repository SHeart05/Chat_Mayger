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
                templateUrl: 'core/landing/landing.html',
                controller: 'LandingCtrl',
                controllerAs: 'landingVm'
            })
            .state('register', {
                url:'/register',
                templateUrl: 'components/register/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'registerVm'
            })
            .state('account', {
                url:'/account',
                templateUrl: 'components/account/account.html',
                controller: 'AccountCtrl',
                controllerAs: 'accountVm'
            })
            .state ('shoppingcard', {
                url: '/account/shoppoingcard',
                templateUrl: 'components/account/shoppingcard/shoppingcard.html',
                controller: 'ShoppingCardCtrl',
                controllerAs: 'shoppingcardVm'
            });
    }
})();
