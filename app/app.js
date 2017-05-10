'use strict'

var myapp = angular.module('myphonecatapp', []);

myapp.controller("PhoneListController", function($scope){
    
    $scope.phones = [
        {
            name: "Nexus S",
            snippet: "Fast"
        },
        {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        },
        {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
});