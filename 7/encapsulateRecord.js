const organization = {name: "Acme Gooseberries", country: "GB"};
function getRawDataOfOrganization() {return organization;}

result += `<h1>${getRawDataOfOrganization().name}</h1>`;

getRawDataOfOrganization().name = newName;
