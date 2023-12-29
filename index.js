/*console.log('I like PIzza');
console.log("It's really good!");
console.log("I love Pizza!");*/

// A Variable is a container for storing data
// A variable behaves as if it was the value that it contains
//  Two steps :
// 1. Declaration (var, let, const)
// 2. Assignment (=Assignment operator)

//let age = 21; //number

//let FirstName = "Bro"  //string

//let student = true //boolean either true or false

/*console.log("Hello", FirstName)
console.log("You are",age, "years old")
console.log("Enrolled:",student)

document.getElementById("p1").innerHTML = "Hello " + FirstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old ";
document.getElementById("p3").innerHTML = "Enrolled:" + student;*/


//Arithmetic expression is a combination of........
// Operands (values, Variables, e.t.c)
// operators (+ - * / %)
// that can be evaluated to a value
// ex. y = x + 5 ;

//let students = 21;
//students = students + 1;
//students = students - 1;
//students = students / 2;
//students = students * 2;
//let Extrastudents = students % 3

//Augmented assignment operator
//students += 1;
//students -= 1;
//students /= 2;
//students *= 2;

//console.log(students);

//How to accept user input

//Easy way with a window prompt
//let username = window.prompt("What's Your Name");
//console.log(username);

// Difficult way HTML textbox

//let username;

/*document.getElementById("mybutton").onclick = function(){
        username = document.getElementById("mytext").value;
        console.log(username);
        document.getElementById("mylabel").innerHTML = "Hello " + username;
}*/

// Type conversion = change the data type of a value to another
// (strings, numbers, booleans)

/*let age = window.prompt("How old are you");
age = Number(age);
age += 1;
console.log("Happy Birthday! You are", age, "years old");*/

/*let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("")

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)*/

//const = a variable that cant be changed
//const PI = 3.14159;
//let pi = 3.14159;
//let radius;
//let circumference;

//PI = 420.69;

//radius = window.prompt("Enter the radius of a circle");
//radius = Number(radius);
//circumference = 2 * PI * radius;
//console.log("The Circumference is:", circumference)

// Javascript Math

/*
let x;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 2);
x = Math.sqrt(x);
x = Math.abs(x);
maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z)

x = Math.PI;
console.log(x)
*/

// let a;
// let b;
// let c;
/*a = window.prompt("Enter side A")
a = Number(a);

b = window.prompt("Enter Side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("side c:", c);
*/
// document.getElementById("submitButton").onclick = function(){
    //  
    // a = document.getElementById("aTextBox").value;
    // a = Number(a);
// 
    // b = document.getElementById("bTextBox").value;
    // b = Number(b);
// 
    // 
    // c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// 
    // document.getElementById("cLabel").innerHTML = "Side C: " + c;
// }

// counting 

// let count = 0;
// 
// document.getElementById("decreaseBtn").onclick = function(){
    // count-=1;
    // document.getElementById("countLabel").innerHTML = count;
// }
// 
// document.getElementById("resetBtn").onclick = function(){
    // count=0;
    // document.getElementById("countLabel").innerHTML = count;
// }
// 
// document.getElementById("increaseBtn").onclick = function(){ 
    // count+=1;
    // document.getElementById("countLabel").innerHTML = count;
// }

//Random number

// let x;
// let y;
// let z;
// 
// document.getElementById("rollButton").onclick = function(){
    // x = Math.floor(Math.random() * 6) + 1;
    // y = Math.floor(Math.random() * 6) + 1;
    // z = Math.floor(Math.random() * 6) + 1;
// 
    // document.getElementById("xlabel").innerHTML = x;
    // document.getElementById("ylabel").innerHTML = y;
    // document.getElementById("zlabel").innerHTML = z;
// 
// }

// useful string properties & methods

// let userName = " Bro Code ";
// let phoneNumber = "123-456-7890";

// console.log(userName.length); character lenght
// console.log(userName.charAt(4)); character position
// console.log(userName.lastIndexOf("o"));
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());

// phoneNumber = phoneNumber.replaceAll("-", "/");
// 
// console.log(phoneNumber);

// Slice method

//let fullName = "Fuad Adebakin";
//let firstName;
//let lastName; 

//firstName = fullName.slice(0, 3)
//lastName = fullName.slice(4);

//firstName = fullName.slice(0, fullName.indexOf(" "));
//lastName = fullName.slice(fullName.indexOf(" ") + 1);


//console.log(firstName);
//console.log(lastName);

// method chaining 

//let userName = "fuad";

//let letter = userName.charAt(2).toUpperCase().trim();

//console.log(letter);

// if statement

/*let age = 65;

if (age >= 65){
    console.log("you are a senior citizen");
}

else if (age >= 18){
    console.log("You are an adult");
}

else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!")
}

else{
    console.log("you are a child!")
}
*/

/*let online = true;

if (online){
    console.log("You are online!");
}
else{
    console.log("You are offline");
}
*/

document.getElementById("myButton").onclick = function(){
    if(document.getElementById("myCheckBox").checked){
        console.log("You have subscribed !");
    }

    else{
        console.log("You are not subscribed!")
    }
}