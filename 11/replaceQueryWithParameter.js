// It allows the user to select a temperature on a thermostat—but only
// sets the target temperature within a range determined by a heating plan.


// The HeatingPlan class is immutable — its fields are set in the constructor
// with no methods to alter them. Given an immutable heating plan, by moving
// the thermostat reference out of the function body I’ve also made
// targetTemperature referentially transparent. Every time I call targetTemperature
// on the same object, with the same argument, I will get the same result.
// If all the methods of the heating plan have referential transparency,
// that makes this class much easier to test and reason about.

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
