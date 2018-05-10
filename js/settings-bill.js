function setLogic() {
  var setcall = 0;
  var setsms = 0;//for when the add button is pressed
  var settotal = 0;

  var callCost = 2.75;
  var smsCost = 0.75;
  var warningLevel = 20;
  var criticalLevel = 30;//for when the add button is pressed


  function calculateSettings(settingsItem) {
    if (settingsItem === 'call') {
      setcall += callCost;
      settotal += callCost;
      if (settotal > criticalLevel) {
        var diff = settotal - criticalLevel;
        setcall -= diff;
        settotal -= diff;
      }
    } else if (settingsItem === 'sms') {
      setsms += smsCost;
      settotal += smsCost;
      if (settotal > criticalLevel) {
        var diff = settotal - criticalLevel;
        setsms -= diff;//for when the add button is pressed
        settotal -= diff;
      }
    }
    settotal = setcall + setsms
  }

  function getsetcall() {//for when the add button is pressed
    return setcall;
  }

  function getsetsms() {//for when the add button is pressed
    return setsms;
  }

  function getsettotal(){
    return settotal;
  }
//for when the add button is pressed

  function getWarning() {
    return warningLevel;

  }
//for when the add button is pressed
  function getCritical() {
    return criticalLevel;
  }


  function settingCalls(num) {
    callCost = parseFloat(num);//for when the add button is pressed
  }

  function settingSms(num) {
    smsCost = parseFloat(num);
  }

  function settingWarning(num) {//for when the add button is pressed
    warningLevel = parseFloat(num);
  }

  function settingCritical(num) {
    criticalLevel = parseFloat(num);

  }//for when the add button is pressed
  return {
    getsetcall,
    getsetsms,
    getsettotal,
    settingCalls,
    settingSms,
    settingWarning,
    settingCritical,
    getWarning,
    getCritical,
    calculateSettings
  }
}

var set = setLogic();
