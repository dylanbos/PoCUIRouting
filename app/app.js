/**
 * Created by dylanbos on 6/22/14.
 */

var routerApp = angular.module('routerApp', ['ui.router', 'appControllers']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $urlRouterProvider.when('/home', '/home/content');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: 'partials/home.html', controller:'homeController' },
                'contact@home': { templateUrl: 'partials/partial-contact.html'}
            }
        })

        .state('home.content', {
            url: '/content',
            templateUrl: 'partials/partial-content.html'
        })

        .state('home.content2', {
            url: '/content2',
            templateUrl: 'partials/partial-content2.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partials/about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { template: 'Look I am a column too!'},
                'bottomPart': { templateUrl: 'partials/partial-about-bottom.html'}
            }
        })
});