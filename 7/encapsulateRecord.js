class Organization {
  constructor(data) {
    this._data = data;
  }

  set name(aString) {this._data.name = aString;}
  get name() {return this._data.name;}
}

const organization = new Organization({ name: "Acme Gooseberries", country: "GB" });
function getOrganization() {return organization;}

result += `<h1>${getOrganization().name}</h1>`;

getOrganization().name = newName;
