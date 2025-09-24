// Complete the js code
function Car(make, model) {
	this.car = make;
	this.model =  model;

	getMakeModel(){
		console.log(make + " " + model); 
	}
}

function SportsCar(make, model, topSpeed) {
	super(make,model);
	this.topSpeed = topSpeed;

	getTopSpeed(){
		console.log(topSpeed);
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
