class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() {return this._name;}
  set name(arg) {this._name = arg;}
  get telephoneNumber() {return this._telephoneNumber.toString();}
  get officeAreaCode() {return this._telephoneNumber.areaCode;}
  set officeAreaCode(arg) {this._telephoneNumber.areaCode = arg;}
  get officeNumber() {return this._telephoneNumber.number;}
  set officeNumber(arg) {this._telephoneNumber.number = arg;}
}

class TelephoneNumber {
  get areaCode() {return this.areaCode;}
  set areaCode(arg) {this.areaCode = arg;}
  get number() {return this.number;}
  set number(arg) {this.number = arg;}
  get toString() {return `(${this.areaCode}) ${this.number}`;}
}