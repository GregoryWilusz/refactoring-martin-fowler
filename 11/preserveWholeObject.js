// Consider a room monitoring system. It compares its
// daily temperature range with a range in a predefined heating plan.

// caller...
if (!aPlan.aPlan.xxNEWwithinRange(aRoom.daysTempRange))
  alerts.push("room temperature went outside range");

class HeatingPlan {
  xxNEWwithinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low) &&
      (aNumberRange.high <= this._temperatureRange.high);
  }
}
