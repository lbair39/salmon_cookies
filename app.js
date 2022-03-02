'use strict';


var hours =['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// REVIEW: look at the JS object for a store below (seattle)
// You will be copying this object design, and it's capabilities


var seattle = {
 locationName: 'Seattle',
 minCustomersPerHour: 12,
 maxCustomersPerHour: 60,
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
   var unorderedList=document.getElementById("seattle");
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

var tokyo = {
  locationName: 'Tokyo',
  minCustomersPerHour: 22,
  maxCustomersPerHour: 120,
  avgCookiesPerSale: 7.6,
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

    var unorderedList=document.getElementById("tokyo");
 
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
 

var dubai = {
  locationName: 'Dubai',
  minCustomersPerHour: 27,
  maxCustomersPerHour: 96,
  avgCookiesPerSale: 8.2,
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
    var unorderedList=document.getElementById("dubai");
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


var paris = { 
    locationName: 'Paris', 
    minCustomersPerHour: 35, 
    maxCustomersPerHour: 140,
    avgCookiesPerSale: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHour: function () {
        
   for ( var i = 0; i < hours.length; i++) {
   this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour)); 
}
},

calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
 
    for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.customersEachHour[i] *  this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }
},

 render() {
    this.calcCookiesEachHour();
    var unorderedList=document.getElementById("paris");
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
    minCustomersPerHour: 37, 
    maxCustomersPerHour: 84, 
    avgCookiesPerSale: 6.3, 
    customersEachHour: [],
    cookiesEachHour: [], 
    totalDailyCookies: 0, 

    calcCustomersEachHour: function () {
        for (var i=0; i< hours.length; i++) { 
            this.customersEachHour.push(random( this.minCustomersPerHour, this.maxCustomersPerHour));
        }
    },
    calcCookiessEachHour: function () {
        this.calcCustomersEachHour();
        for (var i=0; i< hours.length; i++) {
        var oneHour= Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
        this.cookiesEachHour. push(OneHour);
        this.totalDailyCookies += oneHour;
        }
    
    },
    render (){
        this.calcCookiessEachHour();
        var unorderedList=document.getElementById("lima");
        for (var i =0; i < hours.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = hours[i] + ':' + this.cookiesEachHour[i] + 'cookies';
            unorderedList.appendchild(listItem);
        }
        listItem = document.createElement ('li');
        listItem.textContent= 'Total'+ this.totalDailyCookies + 'cookies';
        unorderedList.appendChild(listItem);
    }

};

function random(min, max) {
 // TODO: "floor" this random number generator
 return Math.floor(Math.random() * (max - min + 1) + min);
}
// TODO: list all shop objects in an array
var allShops = [seattle, lima, dubai, tokyo, paris];
(function renderAllShops() {
 for (var i = 0; i < allShops.length; i++) {
   allShops[i].render();
 }
})();

const ocean = document.getElementById('ocean'),
 waveWidth = 10,
 waveCount = Math.floor(window.innerWidth/waveWidth),
 docFrag = document.createDocumentFragment();



for(let i = 0; i < waveCount; i++){
 const wave = document.createElement('div');
 wave.className += ' wave';
 docFrag.appendChild(wave);
 wave.style.left = i * waveWidth + 'px';
 wave.style.webkitAnimationDelay = (i/100) + 's';
}



ocean.appendChild(docFrag);

