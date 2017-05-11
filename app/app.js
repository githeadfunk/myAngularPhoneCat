'use strict'

var myapp = angular.module('myphonecatapp', []);

myapp.controller("PhoneListController", function($scope){
    
   
});

myapp.component("phoneList", {
    template: '<ul>' +
                  '<li ng-repeat="phone in $ctrl.phones">' +
                    '<span>{{phone.name}}</span>' +
                    '<p>{{phone.snippet}}</p>' +
                  '</li>' +
              '</ul>',
    controller: function PhoneListController(){
        this.phones = [
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
    }
});