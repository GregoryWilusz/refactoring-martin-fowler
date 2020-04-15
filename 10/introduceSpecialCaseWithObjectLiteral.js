class Site {
  get customer() {return this._customer;}
}

class Customer {
  get isUnknown() {return false;}
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}
}

function createUnknownCustomer() {
  return {
    isUnknown: true,
  };
}

function isUnknown(arg) {
  return (arg === "unknown");
}

//client 1...
const aCustomer = site.customer;
// ... lots of intervening code ...
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

//client 2...
const plan = (isUnknown(aCustomer)) ?
  registry.billingPlans.basic
  : aCustomer.billingPlan;

// client 3...
const weeksDelinquent = (isUnknown(aCustomer)) ?
  0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;
