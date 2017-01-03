var name = "bob";
console.log(typeof (name));
4;
//
var x = 8;
console.log(typeof (x));
//
var arr = [1, 2, 3];
console.log(Array.isArray(arr));
//
var myVariable = null;
console.log(myVariable === null);
//
console.log(parseInt('20.33'));
console.log(parseFloat('20.33'));
console.log(parseFloat('20.33 is too much!'));
//
var dogName = 'Havoc';
console.log(dogName);
//
function doSomething() {
    var something = 'walk dog';
    console.log(something);
}
//
function subtractNumbers(number1, number2) {
    return number1 - number2;
    var result = subtractNumbers(7, 3);
    console.log(result);
}
