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

// client 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... lots of intervening code ...
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

function enrichSite(inputSite) {
  return _.cloneDeep(inputSite);
}


// client 2
const plan = (aCustomer === "unknown") ?
  registry.billingPlans.basic
  : aCustomer.billingPlan;

// client 3
const weeksDelinquent = (aCustomer === "unknown") ?
  0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;
