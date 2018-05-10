describe('radioBill Widget', function(){
  it ('should add total for call Bill', function(){
    var check = radioLogic();
    check.calc('call');
    check.calc('call');
    check.calc('call');
    check.calc('call');
  assert.equal(check.callBill(), 11.00);
  });

  it ('should add total for sms Bill', function(){
    var check = radioLogic();
    check.calc('sms');
    check.calc('sms');
    check.calc('sms');
    check.calc('sms');
  assert.equal(check.smsBill(), 3.00);
  });

  it ('should add total for sms Bill and call Bill', function(){
    var check = radioLogic();
    check.calc('sms');
    check.calc('sms');
    check.calc('sms');
    check.calc('sms');

    check.calc('call');
    check.calc('call');
    check.calc('call');
    check.calc('call');
  assert.equal(check.TotalBill(), 14.00);
  });
});
