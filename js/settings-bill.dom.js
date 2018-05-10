// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings');

// get refences to all the settings fields
var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');

//get a reference to the add button
var radiosettingsaddBtn = document.querySelector('.radiosettingsaddBtn');

//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings


// create a variables that will keep track of all three totals.
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

callTotalSettings.innerHTML = "0.00";
smsTotalSettings.innerHTML = "0.00";
totalSettings.innerHTML = "0.00";
//for when the add button is pressed

function updateFunction() {

  set.settingCalls(callCostSetting.value);
  set.settingSms(smsCostSetting.value);
  set.settingWarning(warningLevelSetting.value);
  set.settingCritical(criticalLevelSetting.value);
}

function billSettings() {

  var settingRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (settingRadioBtn) {
    set.calculateSettings(settingRadioBtn.value);
  }
  var getsettotal = set.getsettotal();
  callTotalSettings.innerHTML = set.getsetcall();
  totalSettings.innerHTML = set.getsettotal();
  smsTotalSettings.innerHTML = set.getsetsms();
  totalSettings.innerHTML = set.getsettotal();

  if (getsettotal >= set.getCritical()) {
    totalSettings.classList.add('danger');
  } else if (getsettotal >= set.getWarning()) {
    totalSettings.classList.add('warning');

  }

}
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', updateFunction);

//add an event listener for when the add button is pressed
radiosettingsaddBtn.addEventListener('click', billSettings);
