'use strict';
// TODO: assign an array to the hours variable below
// your array should contain the hours of 6am through 7pm

var hours =['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// REVIEW: look at the JS object for a store below (seattle)
// You will be copying this object design, and it's capabilities

var seattle = {

 locationName: 'Seattle',

 minCustomersPerHour: 23,

 maxCustomersPerHour: 65,

 avgCookiesPerSale: 6.3,

 customersEachHour: [],

 cookiesEachHour: [],

 totalDailyCookies: 0,


 calcCustomersEachHour: function () {


   for (var i = 0; i < hours.length; i++) {


     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));

   }
  
 },
 calcCookiesEachHour: function () {

   this.calcCustomersEachHour();

   for (var i = 0; i < hours.length; i++) {

     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);

     this.cookiesEachHour.push(oneHour);

     this.totalDailyCookies += oneHour;
   }
  }
}