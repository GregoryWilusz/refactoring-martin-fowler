class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  get priorityString() {return this._priority.toString();}
  set priority(aString) {this._priority = new Priority(aString);}

}

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    this._value = value;
  }
  toString() {return this._value;}
}

highPriorityCount = orders
  .filter(o => "high" === o.priorityString() || "rush" === o.priorityString())
  .length;
