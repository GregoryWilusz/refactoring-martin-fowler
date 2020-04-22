class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }
  get isMale() {return "M" === this._genderCode;}
  get name() {return this._name;}
  // snip
}

function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M': return new Person(aRecord.name, 'M');
    case 'F': return new Person(aRecord.name, 'F');
    default:  return new Person(aRecord.name);
  }
}

// client...
const numberOfMales = people.filter(p => p.isMale).length;

function isMale(aPerson) {return aPerson instanceof Male;}
