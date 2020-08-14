var message = "in global";
//console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	//console.log("a: message = " + message);

	function b () {
	//console.log("b: message = " + message);
	}

	b();
}

a();



//////////////////////// lec 42: js data type




// var x;
// console.log(x);

// if (x == undefined) {
// 	console.log("x is undefined.");
// }

// x = 5;
// if (x == undefined) {
// 	console.log("x is undefined.");
// }
// else {
// 	console.log("x has been defined.");
// }




//////////////////////// lec 43: common js constructions




// // **** String concatination
// var string = "Hello";
// string += " world";
// // string = string + " world";
// console.log(string + "!");



// // **** Regular math operators: +, -, *, /
// console.log((5 + 4) / 3);
// console.log(undefined / 3);
// function test1 (a) {
// 	console.log(a / 5);
// }
// test1(1);



// **** Equality
// var x = 4, y = 4;
// if (x == y) {
// 	console.log("x=4 is equal to y=4.");
// }

// x = "4";
// if (x == y) {
// 	console.log("x='4' is equal to y=4.");
// }



// // **** Strict equality
// var x = 4, y = 4;
// var x = '4';
// if (x === y) {
// 	console.log("Strict: x='4' is equal to y=4.");
// }
// else {
// 	console.log("Strict: x='4' is NOT equal to y=4.");
// }



// // **** if statement (all false)
// if (false || null || undefined || "" || 0 || NaN) {
// 	console.log("This line won't ever execute.");
// }
// else {
// 	console.log("All false!!");
// }

// // **** if statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true.");
// }



// // **** best practice for {} style
// // curly braces on the same line or on the next...
// function a ()
// {
// 	return
// 	{
// 		name: "Yuxuan"
// 	};
// }
// // here the reason why this returns undefined is bc when js go through
// // the code, it discovers that nothing is behind the return statement.
// // So what it does is it automatically places a semi-colon right behind
// // the return statement and the execution of the whole function pauses.

// function b () {
// 	return {
// 		name: "Yuxuan"
// 	};
// }

// console.log(a());
// console.log(b());



// // *** For loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	sum = sum + i;
// }
// console.log("The sum of 0 to 9 is: " + sum);




//////////////////////// lec 44: js default values




// function orderChickenWith (sideDish) {
// 	// if (sideDish === undefined) {
// 	// 	sideDish = "rice";
// 	// }
// 	sideDish = sideDish || "rice";
// 	console.log("Chicken with " + sideDish + ".");
// }

// orderChickenWith("noodles");
// orderChickenWith();




//////////////////////// lec 45: Creating new objects using
//////////////////////// 'new Object()' syntax




// First way to create an Object:

// var company = new Object();
// company.name = "Microsoft";
// //console.log(company);
// // the name is 'name', and the value is 'Microsoft'.
// company.ceo = new Object();
// company.ceo.firstName = "John";
// company.ceo.favColor = "black";

// console.log(company);
// console.log("Company CEO name is: " 
// 	+ company.ceo.firstName);

// console.log(company["name"]);

// // two ways to declare name value pair in Object.
// //company.$stock = 100;
// company["stock of company"] = 110;

// console.log(company);
// console.log("Stock of company is: " + company["stock of company"]);


// Second way to create an Object (better way: object literal):

// var microsoft = {
// 	// put comma at the end of each name-value pair, not semicolon!!
// 	name: "Microsoft",
// 	ceo: {
// 		firstName: "John",
// 		favColor: "black" // the last name-value pair in the object
// 						  // does not have a comma at the end!!
// 	},  // don't forget to put comma here!!!!!!
// 	$stock: 110, // no comma at the end indicates that this is the 
// 				// last name-value pair inside the object.
// 	"stock of company": 110
// };

// console.log(microsoft.ceo.firstName);




//////////////////////// lec 46: Function Explained




// // functions in js are called: first-class data type.
// // that is, whatever you can do to an object, then whatever you can do
// // to the function.

// // functions are objects!

// function multiply (x, y) {
// 	return x * y;
// }

// multiply.version = "v.1.0.0";
// //console.log(multiply);  // the output is the function code itself.
// console.log(multiply.version);


// // Function factory:
// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	};
// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// // here the variable multiplyBy3 is a reference of the function inside 
// // makeMultiplier(mutiplier) (which is 'myFunc').
// console.log(multiplyBy3(10));

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));


// // Passing functions as arguments
// function doOperationOn(x, operation) {
// 	return operation(x);
// }
// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);




//////////////////////// lec 47: Passing variables by values vs reference


// ------------ Copy by value vs copy by reference

// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("After b update: ");
// console.log("a: " + a);
// console.log("b: " + b);

//////////

// var a = {x : 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("After b.x update: ");
// console.log(a);
// console.log(b);


// ------------ Pass by value vs pass by reference

// function changePrimitive(primValue) {
// 	console.log("In changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value in memory
// console.log("After changePrimitive, orig value:");
// console.log(value);


// function changeObject(objValue) {
// 	console.log("In changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x = 5;
// 	console.log("after:");
// 	console.log(objValue);
// }

// value = {x : 7};
// changeObject(value); // objValue = value in memory
// console.log("After changeObject, orig value:");
// console.log(value);




//////////////////////// lec 48: Function constructor




// // Function constructor

// function Circle(radius) {
// 	this.radius = radius;
// }
// Circle.prototype.getArea = 
// 	function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	};

// var myCircle = new Circle(10);  // new Object();
// console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);




//////////////////////// lec 49: Object literals and the 'this' keyword.




// var literalCircle = { // this is actually a 'new Object();'
// 	radius: 10,

// 	getArea: function () {
// 		//console.log(this);  // this points to the object that calls it.
// 		var self = this;

// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(literalCircle.getArea());




//////////////////////// lec 50: Arrays




// var array = new Array();
// array[0] = "Yuxuan";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name + "!");
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);


// // Short hand array creation
// var names = ["Yuxuan", "Rui Heng", "Haha", "Jason"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

// names[100] = "Giulia";
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }


var names2 = ["Yuxuan", "Rui Heng", "Haha", "Jason"];

// var myObj = {
// 	name: "Yuxuan",
// 	course: "HTML, CSS & JS",
// 	platform: "Coursera"
// };
// for (var obj in myObj) {   // objs are names of an object.
// 	console.log(obj + ": " + myObj[obj]);
// }

// for (var name in names2) {  // here name is a specific number in the
// 							// range 0 ~ 3.
// 	console.log("Hello " + names2[name]);
// }

names2.greeting = "Hi!";

for (var name in names2) {  // here name is a specific number in the
							// range 0 ~ 3.
	console.log("Hello " + names2[name]);
}






