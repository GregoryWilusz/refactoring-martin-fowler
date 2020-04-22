class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }
  get isMale() {return "M" === this._genderCode;}
  get name() {return this._name;}
  // snip
}

class Female extends Person {
  get genderCode() {return "F";}
}

function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M': return new Person(aRecord.name, 'M');
    case 'F': return new Female(aRecord.name);
    default:  return new Person(aRecord.name);
  }
}

// client...
const numberOfMales = people.filter(p => p.isMale).length;

function isMale(aPerson) {return aPerson instanceof Male;}
