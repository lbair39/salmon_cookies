'use strict';









// TODO: assign an array to the hours variable below


// your array should contain the hours of 6am through 7pm







// REVIEW: look at the JS object for a store below (seattle)


// You will be copying this object design, and it's capabilities










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
},
render() {
  this.calcCookiesEachHour();
  // TODO:  access the seattle store HTML list by it's ID
  // and assign it to the unorderedList variable below
  var unorderedList;



  for (var i = 0; i < hours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
    unorderedList.appendChild(listItem);
  }
  listItem = document.createElement('li');
  listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
  unorderedList.appendChild(listItem);
}
};
// TODO:  copy the object data from above and paste it 4 times below, each time representing a new city:  tokyo, dubai, paris, lima
// the minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale should all have different sales counts
// you may make these counts up and will also need to update where you "select" or "access" your HTML for each store



var tokyo = { };







var dubai = { };







var paris = { 
    locationName: 'Paris', 
    minCustomersPerHour: 23, 
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    
    calcCustomersEachHour: function () {
        for ( var i=0;< hours.length; i++) {
   this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour)); })} 
},

calcCookiesEachHour: function () {

    this.calcCustomersEachHour();
    
    for (var i = 0; i < hours.length; i++)

    var oneHour = Math.ceil(this.customersEachHour[i] (this.avgCookiesPerSale);


     this.cookiesEachHour.push(oneHour);


     this.totalDailyCookies += oneHour;


   }
},
 render() {


    this.calcCookiesEachHour();
 
    var unorderedList;
for (var i = 0; i < hours.length; i++) {
 
 
      var listItem = document.createElement('li');
 
 
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
 
 
      unorderedList.appendChild(listItem);
  }
    listItem = document.createElement('li');


   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';


   unorderedList.appendChild(listItem);


 }


};
 









var lima = { 
    locationName: 'Lima',
    minCustomersPerHour: 23, 
    maxCustomersPerHour: 65, 
    avgCookiesPerSale: 6.3, 
    customersEachHour: [],
    cookiesEachHour: [], 
    totalDailyCookies: 0, 

    calcCustomersEachHour: function () {
        for (var i=0; < hours.length; i++) { 
            this.customersEachHour.push(random( this.minCustomersPerHour, this.maxCustomersPerHour))
        }
    }
    calcCookiessEachHour: function () {
        this.calcCustomersEachHour();
        for (var 1=0; i< hours.length; i++)
        var oneHour= Math.ceil(this.customersEachHour[i](this.avgCookiesPerSale.):
        this.cookiesEachHour. push(OneHour);
        this.totalDailyCookies += oneHour;
    }
    render (){
        this.calcCookiessEachHour();
        var unorderedList; 
        for var(i =0; i < hours.length; i++){
            var listItem = document.createElement('li')
            listItem.textContent = hours[i] + ':' +this.cookiesEachHour[i]+'cookies';
            unorderedList.appendchild(listItem);
        }
        this.totalDailyCookies();
        var unorderedList;
        for var( i=0; i < hours.length; i++)
        listItem = document.createElement ('li');
        listItem.textContent= 'Total'+ this.totalDailyCookies + 'cookies';
        unorderedList.appendChild(listItem);
    }

};







function random(min, max) {


 // TODO: "floor" this random number generator


 return Math.random() * (max - min + 1) + min;


}







// TODO: list all shop objects in an array


var allShops = [];







(function renderAllShops() {


 for (var i = 0; i < allShops.length; i++) {


   allShops[i].render();


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

