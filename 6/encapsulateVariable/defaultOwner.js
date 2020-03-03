let defaultOwnerData = {firstName: "Martin", lastName: "Fowler"};

module.exports = {
  defaultOwner: function defaultOwner() { return Object.assign({}, defaultOwnerData); },
  setDefaultOwner: function setDefaultOwner(arg) { defaultOwnerData = arg; }
};
