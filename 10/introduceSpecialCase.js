class Site {
  get customer() {
    return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
  }
}

class Customer {
  get name() {...}
  get billingPlan() {...}
  set billingPlan(arg) {...}
  get paymentHistory() {...}
  get isUnknown() {return false;}
}

class UnknownCustomer {
  get isUnknown() {return true;}
  get name() {return "occupant";}
  get billingPlan() {return registry.billingPlans.basic;}
  set billingPlan(arg) { /* ignore */ }
}


function isUnknown(arg) {
  if (!((arg instanceof Customer) || (arg === "unknown")))
    throw new Error(`investigate bad value: <${arg}>`);
  return (arg === "unknown");
}

//client 1...
const aCustomer = site.customer;
// ... lots of intervening code ...
const customerName = aCustomer.name;

//client 2...
const plan = aCustomer.billingPlan;

//client 3...
aCustomer.billingPlan = newPlan;

//client 4...
const weeksDelinquent = isUnknown(aCustomer) ?
  0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;