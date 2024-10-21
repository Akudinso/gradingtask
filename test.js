// let Cloth = {
//     size : 10,
//     color: 'red',
//     style: 'flare pant',
//     brand: function() {
//         console.log('Louis Vuiton.');
//     }

// };

// console.log(Cloth.size);
// console.log(Cloth.color);
// console.log(Cloth.style);
// Cloth.brand();

// let x = 6;
// x = y;
// // x = x+y;
// // y = x-y;
// // x =+ y;
// // x =- y;
// // x * y;
// // x / y;

// console.log(x);


// function add (num1, num2) {

//     const thistype = typeof num1;
//     const thistype2 = typeof num2;

//     num1 = "morning"
//     num2 = "evening"
//     num3 = "Its getting dark"
//     if (num1 === 'number' && num) {
        
//     } else if (condition) {
        
//     }
// }

// function greet(timeOfDay) {

//     const morningGreeting = "Good Morning";
//     const eveningGreeting = "Good Evening";
//     const darkGreeting = "Its getting Dark";

//     if (typeof timeOfDay === 'string') {
//         if (timeOfDay.length > 0) {
//             timeOfDay = timeOfDay.toLowerCase();
//         }
//     }
// }



// function greet(timeOfDay) {
//     // Check if timeOfDay is of type string
//     if (typeof timeOfDay === 'string') {
//         // Check string length
//         if (timeOfDay.length > 0) {
//             // Convert timeOfDay to lowercase for consistency
//             timeOfDay = timeOfDay.toLowerCase();
            
//             // Define greetings
//             const morningGreeting = "Good morning";
//             const eveningGreeting = "Good evening";
//             const darkGreeting = "It's getting dark";
            
//             // Output greetings based on timeOfDay
//             if (timeOfDay === "morning") {
//                 console.log(morningGreeting);
//                 console.log("String length:", morningGreeting.length);
//             } else if (timeOfDay === "evening") {
//                 console.log(eveningGreeting);
//                 console.log("String length:", eveningGreeting.length);
//             } else if (timeOfDay === "dark") {
//                 console.log(darkGreeting);
//                 console.log("String length:", darkGreeting.length);
//             } else {
//                 console.log("Invalid time of day input.");
//             }
//         } else {
//             console.log("Empty string provided.");
//         }
//     } else {
//         console.log("Invalid data type. Please enter a string.");
//     }
// }

// // Test the function
// greet("morning");  // Output: Good morning
// greet("evening");  // Output: Good evening
// greet("dark");     // Output: It's getting dark
// greet(123);        // Output: Invalid data type. Please enter a string.
// greet("");         // Output: Empty string provided.




// function greet(timeOfDay) {
//     // Step 1: Check if the input is a valid string
//     if (typeof timeOfDay !== 'string') {
//         console.log("Invalid input. Please provide a string.");
//         return;
//     }

//     // Step 2: Check the string length
//     if (timeOfDay.length === 0) {
//         console.log("Invalid input. The string is empty.");
//         return;
//     }

//     // Step 3: Trim the string to avoid spaces being counted in the length
//     timeOfDay = timeOfDay.trim();

//     // Step 4: Use if and else if to determine the correct greeting
//     if (timeOfDay.toLowerCase() === 'morning') {
//         let greeting = "Good morning!";
//         console.log(greeting);
//         console.log("The length of the greeting is:", greeting.length);
//     } else if (timeOfDay.toLowerCase() === 'evening') {
//         let greeting = "Good evening!";
//         console.log(greeting);
//         console.log("The length of the greeting is:", greeting.length);
//     } else if (timeOfDay.toLowerCase() === 'night') {
//         let greeting = "It's getting dark!";
//         console.log(greeting);
//         console.log("The length of the greeting is:", greeting.length);
//     } else {
//         console.log("Invalid input. Please enter 'morning', 'evening', or 'night'.");
//     }
// }


// greet("night");


// This function displays time in multiple of 2 after every 2 seconds.
// var time = 0; 

// setInterval(function () {
//     time += 2;
//     console.log(time + 'seconds have passed.')
// }, 2000);

// This function displays time in multiple of 5 after every 2 seconds and terminates when its when count is = 20seconds
// var time = 0;

// var timer = setInterval(function () {
//     time += 5;
//     console.log(time + 'seconds have passed');
//     if (time >= 20) {
//         clearInterval(timer);
//     }
    
// },2000);

// This command lets you know the particular directory we are at
// console.log(__dirname);

// This command lets you know the particular file we are at
// console.log(__filename);


// normal function statement
// function SayHi() {
//     console.log('HI');
// }

// SayHi();


// function expression
// var Greet = function () {
//     console.log('goodmorning')
// }

// Greet();


// passing function expression into a regular function
// function SayHi(fun) {
//     fun();
// }


// var Greet = function () {
//     console.log('goodmorning')
// }

// SayHi(Greet);



// modules and require()
// var count = require('./count');


// console.log(count.counter(['seun', 'bassey', 'ope']))
// console.log(count.adder(3,4))
// console.log(count.adder(count.pi,4))

// var events = require(events)

// console.log(events)


// console.log("Hello World");

// let num1 = 1;
// console.log(typeof num1);

// let name1 = "uchenna";
// console.log(typeof name1);

// let isAdmin = true;
// console.log(typeof isAdmin);

// let attended;
// console.log(typeof attended)

// let attend = null;
// console.log(typeof attend)

// console.log("Hello " + name1)

// console.log("my name is " + name1 + ", i am " + num1 + " year old");

// var num2 = 20;
// sum1 = num1 + num2;

// console.log(sum1);

// console.log(typeof sum1)

// function add (params) {
    
// }


// assignment
// function testVar() {
//     console.log(x); // undefined due to hoisting
//     var x = 5;
//     console.log(x); // 5
// }
// testVar();


// function testLet() {
//     console.log(x);  // ReferenceError: x is not defined
//     let x = 5;
//     console.log(x);  // 5
//   }
//   testLet();

  

//   const VOTING_AGE_LIMIT = 18;







//   function checkValue(value) {
//     if (value === null) {
//       console.log("Value is null");
//     } else if (value === undefined) {
//       console.log("Value is undefined");
//     } else {
//       console.log("Value is:", value);
//     }
//   }

  
// //   let value = null;
// // console.log(value);  // Output: null



// let value;
// console.log(value);  // Output: undefined



// function greet(name) {  // 'name' is a parameter
//     console.log("Hello, " + name);
// }
  



// greet("Alice");  // "Alice" is an argument



// function sum(a, b) {  // a and b are parameters
//     return a + b;
//   }
  
//   sum(5, 10);  // 5 and 10 are arguments
  
// let a = 5;
// let b = '5';
// sum = a!= b;
// console.log(sum)


// function adder (a,b) {
//     add = a !== b;
//     console.log(add)
// };

// adder(5,2)

// let age = 10;
// let result = (age >= 18) ? 'adult' : 'minor';
// console.log(result)


// let a = 10;
// let b = 20;
// let  result = a + b * 2;
// console.log(result);

// let age = 17;
// let status = (age >= 18) ? 'Adult' : 'Minor';
// console.log(status);


// let username = "John";
// let isLoggedIn = true;
// let greeting = isLoggedIn && `Hello, ${username}`;
// console.log(greeting);


let numOfStudents = prompt('Enter the number of students: ')
let students = []

for (let i = 0; i < numOfStudents; index++) {
    let name = prompt('Enter name of student ${i + 1}: ');
    let age = prompt('Enter age of student ${i + 1}: ');
    let mathGrade = prompt('Enter Math grade for student ${name}: ');
    let scienceGrade = prompt('Enter Science grade for student ${name}: ');
    let englishGrade = prompt('Enter English grade for student ${name}: ');
    const element = array[i];

    let averageGrade = (Number(mathGrade) + Number(scienceGrade) + Number(englishGrade)) / 3; 


    let student = {
        name : name,
        age : age,
        mathGrade : mathGrade,
        scienceGrade : scienceGrade,
        englishGrade : englishGrade,
        averageGrade : averageGrade.toFixed(2)
    };

    students.push(student);

    let continueAdding = confirm("Do you want to add another student?");
    if (!continueAdding){
        break;
    }
}

console.log("Summary of Students:");
students.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} (${student.age}) - Average: ${student.averageGrade}`);
});

let highestAverage = students[0];

students.forEach((student) => {
    if (Number(student.averageGrade) > Number(highestAverage.averageGrade)) {
      highestAverage = student;  
    }
});

console.log(`Highest Average: ${highestAverage.name} (${highestAverage.averageGrade})`);