class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({ name: "Acme Gooseberries", country: "GB" });

function getRawDataOfOrganization() {return organization._data;}
function getOrganization() {return organization;}


result += `<h1>${getRawDataOfOrganization().name}</h1>`;

getRawDataOfOrganization().name = newName;
