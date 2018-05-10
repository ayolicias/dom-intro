describe('calculateBills', function(){
  it ('should return total for one call', function(){
    assert.equal(calculateBills('call'), 2.75)
  });
  it ('should return total for one sms', function(){
  assert.equal(calculateBills('sms'), 0.75);
});
it ('should calculate total phone bill for 2 calls and 3 smses', function(){
 assert.equal(calculateBills('sms,call,sms,call,sms'),7.75);
 });
});
