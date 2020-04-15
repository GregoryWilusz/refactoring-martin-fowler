// Here is a function that scans a list of names for a miscreant.
// If it finds one, it returns the name of the bad guy and sets off the alarms.
// It only does this for the first miscreant it finds.

function alertForMiscreant(people) {
  if (findMiscreant(people) !== "") setOffAlarms();
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === "Don") {
      return "Don";
    }
    if (p === "John") {
      return "John";
    }
  }
  return "";
}

const found = findMiscreant(people);
alertForMiscreant(people);
