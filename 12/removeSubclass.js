class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }
  get genderCode() {return this._genderCode;}
  get name() {return this._name;}
  get isMale() {return this instanceof Male;}
  // snip
}

class Male extends Person {
  get genderCode() {return "M";}
}

class Female extends Person {
  get genderCode() {return "F";}
}

function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M': return new Male  (aRecord.name);
    case 'F': return new Female(aRecord.name);
    default:  return new Person(aRecord.name);
  }
}

// client...
const numberOfMales = people.filter(p => p.isMale).length;

function isMale(aPerson) {return aPerson instanceof Male;}
