// Let’s assume our input is a simple record structure that looks something like this:

// {
//   name: "Acme Boston",
//   location: "Malden MA",
//   // more site details
//   customer: {
//    name: "Acme Industries",
//    billingPlan: "plan-451",
//    paymentHistory: {
//     weeksDelinquentInLastYear: 7
//    //more
//    },
//    // more
//   }
// }

// In some cases, the customer isn’t known, and such cases are marked in the same way:
// {
//   name: "Warehouse Unit 15",
//   location: "Malden MA",
//   // more site details
//   customer: "unknown"
// }

function isUnknown(aCustomer) {
  if (aCustomer === "unknown") return true;
  else return aCustomer.isUnknown;
}

// client 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... lots of intervening code ...
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

function enrichSite(aSite) {
  const result = _.cloneDeep(aSite);
  const unknownCustomer = {
    isUnknown: true,
  };
  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}


// client 2
const plan = (isUnknown(aCustomer)) ?
  registry.billingPlans.basic
  : aCustomer.billingPlan;

// client 3
const weeksDelinquent = (isUnknown(aCustomer)) ?
  0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;
