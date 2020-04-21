// This time, I already have existing subclasses for part-time and full-time employees,
// so I can’t subclass from Employee for the type codes.
// Another reason to not use direct inheritance is keeping the ability to change
// the type of employee.

class EmployeeType {
  get capitalizedName() {
    return this.toString().charAt(0).toUpperCase()
      + this.toString().substr(1).toLowerCase();
  }
}

class Engineer extends EmployeeType {
  toString() {return "engineer";}
}

class Manager extends EmployeeType {
  toString() {return "manager";}
}

class Salesman extends EmployeeType {
  toString() {return "salesman";}
}

class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(arg) {
    if (!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }
  get typeString() {return this._type.toString();}
  set type(arg) {this._type = Employee.createEmployeeType(arg);}
  set type(arg) {this._type = arg;}

  get capitalizedType() {
    return this.typeString.charAt(0).toUpperCase()
      + this.typeString.substr(1).toLowerCase();
  }
  toString() {
    return `${this._name} (${this.capitalizedType})`;
  }

  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer":
        return new Engineer();
      case "manager":
        return new Manager();
      case "salesman":
        return new Salesman();
      default:
        throw new Error(`Employee cannot be of type ${aString}`);
    }
  }
}
