var add = function(number1, number2) {
  return number1 + number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);

//bmi calculator
var bmi = function(number1, number2) {
	return (number1 * 0.4536) / (Math.pow((number2 / 3.28),2));
};

var number1 = parseFloat(prompt("What is your weight in lbs?"));

var number2 = parseFloat(prompt("What is your height in ft?"));

alert(bmi(number1, number2));

//temperature calculator
var fahrenheit = function(number1) {
	return ((number1 - 32) * 5) / 9;
};

var celsius = function(number2) {
	return ((number2 * 9) / 5) + 32;
};


var number1 = parseFloat(prompt("Input a temperature in fahrenheit"));

var number2 = parseFloat(prompt("Input a temperature in celsius"));

alert(fahrenheit(number1));
alert(celsius(number2));
