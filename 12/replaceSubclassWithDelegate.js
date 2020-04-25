class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  // Regular bookings offer a talkback after the show, but only on nonpeak days.
  get hasTalkback() {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15); return result;
  }
}

class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }

  // Premium bookings override this to offer talkbacks on all days.
  get hasTalkback() {
  return this._show.hasOwnProperty('talkback');
  }

  //Determining the price is a similar override,
  // with a twist that the premium method calls the superclass method.
  get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee);
  }

  //The last example is where the premium booking offers
  // a behavior that isn’t present on the superclass.
  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}

// booking client
aBooking = new Booking(show,date);
// premium client
aBooking = new PremiumBooking(show, date, extras);
