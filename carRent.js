// creating our class
function Car(type, color, speed, image, madeDate, addDate){
   var car = {};
   car.type = type;
   car.color = color;
   car.speed = speed; 
   car.madeDate = madeDate;
   car.addDate = addDate;
   car.image = image;
   car.rented = 0; // 1 means rented, 0 not rented
   car.setRent = setRent; // change the value of rented;
}

// the function is used when we rent the car.
function setRent(status) {
  this.rented = status;
}

var car1 = Car('tyota', 'white', '200km', 'image.jpg', '12/3/2015', '3/9/2019');
var car2 = Car('porsh', 'black', '100km', 'image.jpg', '12/4/2015', '2/9/2019');
var car3 = Car('mercedec', 'red', '50km', 'image.jpg', '12/5/2015', '4/9/2019');
var car4 = Car('ferrari', 'yellow', '320km', 'image.jpg', '12/6/2015', '5/9/2019');
var car5 = Car('volks wagn', 'grey', '600km', 'image.jpg', '12/7/2015', '6/9/2019');

var cars = [car1, car2, car3, car4, car5];

function getAvailableCars(carsArr){
	return carsArr.filter(function(car){
      return car.rented === 0;
	});
}

// loading car images to the page

var availableCars = getAvailableCars(cars);
$.each(availableCars,function(car){
  //$('#cars-imgs').append('<img src="' + car.image + '"');
});

