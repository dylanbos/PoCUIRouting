/**
 * Created by dylanbos on 6/22/14.
 */

var appControllers = angular.module('appControllers', []);

appControllers.controller('homeController', ['$scope',
    function($scope) {
        $scope.text = "hai i am here";
    }]
);
