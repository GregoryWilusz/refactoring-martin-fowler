// It allows the user to select a temperature on a thermostat—but only
// sets the target temperature within a range determined by a heating plan.

class HeatingPlan {
  get targetTemperature() {
    if      (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }

}

// caller...
if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();
