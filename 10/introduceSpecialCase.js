class Site {
  get customer() {
    return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
  }
}

class Customer {
  get isUnknown() {return false;}
  get name() { }
  get billingPlan() { }
  set billingPlan(arg) { }
  get paymentHistory() { }
}

class UnknownCustomer {
  get isUnknown() {return true;}
  get name() {return "occupant";}
  get billingPlan() {return registry.billingPlans.basic;}
  set billingPlan(arg) { /* ignore */ }
  get paymentHistory() {return new NullPaymentHistory();}
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {return 0;}
}

function isUnknown(arg) {
  if (!((arg instanceof Customer) || (arg === "unknown")))
    throw new Error(`investigate bad value: <${arg}>`);
  return (arg === "unknown");
}

//client 1...
const aCustomer = site.customer;
const customerName = aCustomer.name;

//client 2...
const plan = aCustomer.billingPlan;

//client 3...
aCustomer.billingPlan = newPlan;

//client 4...
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

//client...
const name = aCustomer.isUnknown ? "unknown occupant" : aCustomer.name
