
describe('PhoneCat Application', function() {

  describe('phoneList', function() {
      
    var logs;  
    beforeEach(function() {
        browser.get('index.html');
    });
      
    it('should redirect `index.html` to `index.html#!/phones', function() {
      browser.get('index.html');
      expect(browser.getLocationAbsUrl()).toBe('/phones');
    });
    
    describe('View: Phone details', function() {

      beforeEach(function() {
        browser.get('index.html#!/phones/nexus-s');
      });

      it('should display placeholder page with `phoneId`', function() {
        expect(element(by.binding('$ctrl.phoneId')).getText()).toBe('nexus-s');
      });

    });
//      it('should be able to ordered by name and age', function() {
//
//        var phoneList = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));
//        var order = element(by.model('$ctrl.order'));
//        var query = element(by.model('$ctrl.query'));
//        
//        order.sendKeys('name');
//        console.log('123');
//        order.getAttribute('value').then(function(inputValue) {
//            console.log(inputValue);
//        });
//        
//        phoneList.getText().then(function(inputValue) {
//            console.log(inputValue);
//            expect(inputValue).toEqual([
//            'Nexus S',
//            'Motorola XOOM\u2122 with Wi-Fi',
//            'MOTOROLA XOOM\u2122'
//            ]);
//        });
//          
//        query.sendKeys('m');
//        phoneList.getText().then(function(inputValue) {
//            console.log(inputValue);
//            expect(inputValue).toEqual([
//            'Motorola XOOM\u2122 with Wi-Fi',
//            'MOTOROLA XOOM\u2122'
//            ]);
//        });
////        expect(phoneList.count()).toBe(1);
//          
////        browser.manage().logs().get('browser').then(function(browserLogs) {
////           // browserLogs is an array of objects with level and message fields
////           browserLogs.forEach(function(log){
////              if (log.level.value > 900) { // it's an error log
////                console.log('Browser console error!');
//////                console.log(query);
////                console.log(log.message);
////              }
////           });
////        });


//    });

  });

});