'use strict';

describe('phoneList', function() {

  beforeEach(module('phoneList'));

  describe('PhoneListController', function(){
      var $httpBackend, ctrl;
      
      beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('phoneList');
      }));
      
      it("should create a 'phones' model with 2 phones", function(){
//          expect(ctrl.phones.count()).toBe(20);
            $httpBackend.flush();
            expect(ctrl.phones.length).toBe(2);
      }); 
       
      it("should set a default value for order", inject(function($componentController){
          var ctrl = $componentController('phoneList');
          expect(ctrl.order).toBe('age');
      }));
  });

});
