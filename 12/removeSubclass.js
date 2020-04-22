class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {return this._name;}
  get genderCode() {return "X";}
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
const numberOfMales = people.filter(p => isMale(p)).length;

function isMale(aPerson) {return aPerson instanceof Male;}
