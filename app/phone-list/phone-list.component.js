'use strict';

angular.module('phoneList').component('phoneList',{
    templateUrl: 'phone-list/phone-list.template.html', 
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