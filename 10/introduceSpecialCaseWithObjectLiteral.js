class Site {
  get customer() {
    return (this._customer === "unknown") ? createUnknownCustomer() : this._customer;
  }
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
    name: 'occupant',
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    }
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

//client 1...
const aCustomer = site.customer;
// ... lots of intervening code ...
const customerName = aCustomer.name;

//client 2...
const plan = aCustomer.billingPlan;

// client 3...
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
