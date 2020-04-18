// It allows the user to select a temperature on a thermostat—but only
// sets the target temperature within a range determined by a heating plan.

class HeatingPlan {
  targetTemperature(selectedTemperature) {
    if      (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

// caller...
if      (thePlan.targetTemperature(thermostat.selectedTemperature) >
         thermostat.currentTemperature)
  setToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature) <
         thermostat.currentTemperature)
  setToCool();
else setOff();