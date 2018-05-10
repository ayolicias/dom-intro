describe('settingBill Widget', function(){
  it ('should add totalBill for call ', function(){
    var update = setLogic();
    update.calculateSettings('call');
    update.calculateSettings('call');
    update.calculateSettings('call');
    update.calculateSettings('call');
    update.calculateSettings('call');

  assert.equal(update.getsetcall(),13.75);
  });
  it ('should add totalBill for sms ', function(){
    var update = setLogic();
    update.calculateSettings('sms');
    update.calculateSettings('sms');
    update.calculateSettings('sms');
    update.calculateSettings('sms');
    update.calculateSettings('sms');
  assert.equal(update.getsetsms(),3.75);
  });

  it ('should add totalBill for sms and calls ', function(){
  var update = setLogic();
  update.calculateSettings('call');
  update.calculateSettings('call');
  update.calculateSettings('call');
  update.calculateSettings('call');
  update.calculateSettings('call');

  update.calculateSettings('sms');
  update.calculateSettings('sms');
  update.calculateSettings('sms');
  update.calculateSettings('sms');
  update.calculateSettings('sms');

assert.equal(update.getsettotal(),17.50);
});

});
