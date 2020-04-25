// library of ancient scrolls.
// They keep details of their scrolls in a catalog.
// Each scroll has an ID number and records its title and list of tags.

class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }
  get id() {return this._id;}
  get title() {return this._title;}
  hasTag(arg) {return this._tags.includes(arg);}
}

// One of the things that scrolls need is regular cleaning.
// The code for that uses the catalog item and extends it with the data it needs for cleaning.

class Scroll {
  constructor(id, title, tags, dateLastCleaned) {
    this._id = id;
    this._catalogItem = new CatalogItem(id, title, tags);
    this._lastCleaned = dateLastCleaned;
  }


  get id() {return this._id;}
  get title() {return this._catalogItem.title;}
  hasTag(aString) {return this._catalogItem.hasTag(aString);}

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }
  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

// load routine...
const scrolls = aDocument
  .map(record => new Scroll(record.id,
                            record.catalogData.title,
                            record.catalogData.tags,
                            LocalDate.parse(record.lastCleaned)));
