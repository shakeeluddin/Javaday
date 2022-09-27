'use strict'
console.log("Hello");
const text ="This is an intro";

console.log ("Shakeel");
console.info("TDP");
console.warn("warning");
console.error("no star sign");

let myCar="Audi";
let myModel="r8";
console.log("my favourite car is: "+ myCar + "and the model is:" + myModel);

console.log("%c" + text , "color:black; background-color: white; font-size: 20px; padding: 5px;")
console.log("%c" + text + "%c" + text, "color:red;", "color:blue;");

let a;
let b = "12345";
let c = 123455;
let d = true;
let e = {a:"javascript"};
console.log (typeof (a));
console.log (typeof(b));

let string1 ="13 * 12 =";
let result = 13 * 12;
console.log(string1 + result);

let age = 50;
if (age >=18 && age <=65){
    console.log("age is in range");
} else if (age < 18){
    console.log("underage");
} else {
    console.log("catch all else");
}

let strictA = true;
let strictB = 1; 
console.log(strictA == StrictB);

'use strict';





