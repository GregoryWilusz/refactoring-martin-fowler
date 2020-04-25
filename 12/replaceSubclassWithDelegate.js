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
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
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

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }
}

function createBooking(show, date) {
  return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
  const result = new PremiumBooking(show, date, extras);
  result._bePremium(extras);
  return result;
}

// booking client
aBooking = createBooking(show, date);
// premium client
aBooking = createPremiumBooking(show, date, extras);
