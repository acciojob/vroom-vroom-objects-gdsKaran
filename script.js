// Complete the js code
function Car(make, model) {
	this.car = make;
	this.model =  model;

	Car.prototype.getMakeModel = function() {
    console.log(this.make + " " + this.model);
  };
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed = topSpeed;

		SportsCar.prototype.getTopSpeed= function(){
		console.log(this.topSpeed);
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
