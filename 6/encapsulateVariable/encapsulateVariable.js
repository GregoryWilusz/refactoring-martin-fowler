const assert = require('assert');
const DefaultOwnerMethods = require('./defaultOwner');

const owner1 = DefaultOwnerMethods.defaultOwner();
assert.equal("Fowler", owner1.lastName, "when set");
const owner2 = DefaultOwnerMethods.defaultOwner();
owner2.lastName = "Parsons";
assert.equal("Parsons", owner1.lastName, "after change owner2"); // is this ok?
