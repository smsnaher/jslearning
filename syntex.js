/*
=========================================
variables
=========================================
*/
var x = 5;
var y = 10;
var sum = x+y;

var firstName = 'Shamsun';
var lastName = 'Naher';
//don't change
const nickName = 'Ratna';
var Name = firstName + lastName + nickName;

console.log (sum);

document.getElementById('math').innerHTML = sum;
document.getElementById('name').innerHTML = Name;


/*
=========================================
operators
=========================================
*/

//propertis
var lname ='Shamsun Naher';
console.log(lname.length);
document.getElementById('length').innerHTML =  lname.length;

//mathod
var uname ='Shamsun Naher';
console.log(uname.toUpperCase());
document.getElementById('name').innerHTML =  uname.toUpperCase();

//prompt : it will ask you for input

var firstName ='Shamsun';
var lastName = prompt ('What is your last name?');
var age= prompt ('What is your age?');
document.getElementById('name').innerHTML='i am ' + firstName + ' ' + lastName + '<br>i am ' + age + 'years old';