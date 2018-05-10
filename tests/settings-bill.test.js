describe('SettingBill Widget', function(){
  it ('should add totalBill for call ', function(){
    var update = SetLogic();
    update.calculateSettings('call');
    update.calculateSettings('call');
    update.calculateSettings('call');
    update.calculateSettings('call');
    update.calculateSettings('call');

  assert.equal(update.getsetcall(),13.75);
  });
  it ('should add totalBill for sms ', function(){
    var update = SetLogic();
    update.calculateSettings('sms');
    update.calculateSettings('sms');
    update.calculateSettings('sms');
    update.calculateSettings('sms');
    update.calculateSettings('sms');
  assert.equal(update.getsetsms(),3.75);
  });

  it ('should add totalBill for sms and calls ', function(){
  var update = SetLogic();
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
it ('should update callCost, smsCost,criticalLevel and warningLevel ', function(){
var update = SetLogic();

update.calculateSettings('call');
update.calculateSettings('sms');
update.calculateSettings('criticalLevel');
update.calculateSettings('warningLevel');

assert.equal(update.getWarning(),20);
assert.equal(update.getCritical(),30);
assert.equal(update.getsetsms(),0.75);
assert.equal(update.getsetcall(),2.75);
});
});

