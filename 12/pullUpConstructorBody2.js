class Employee {
  constructor(name) {}

  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }

  get isPrivileged() {}

  assignCar() {}
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    this.finishConstruction();
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}
