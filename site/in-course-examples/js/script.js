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



// *** For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
	sum = sum + i;
}
console.log("The sum of 0 to 9 is: " + sum);






