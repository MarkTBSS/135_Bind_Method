"use strict";
///////////////////////////////////////
// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

// Define the book function
const book = function (airline, flightNum, passengerName) {
    console.log(`${passengerName} booked a seat on ${airline} flight ${flightNum}`);
};

const eurowings = { airline: 'Eurowings' };
const lufthansa = { airline: 'Lufthansa' };
const swiss = { airline: 'Swiss Air Lines' };

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
