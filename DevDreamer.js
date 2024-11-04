let num = 10 + 2;

if (num > 2 && num < 20) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}


let User = "Employee"

if (User === "Employee") {
    console.log('Successfully Logged in');
} else if (User === guest) {
    console.log('Login Denied');

} else {
    console.log("input correct details")
}


let myName = "Chukwuebuka"

if (myName.length > 5) {
    console.log("More than 5");
} else if (myName.length === 5) {
    console.log("Exactly 5 letters");
} else {
    console.log("less than 5 letters");
}


// switch statement takes strict equality

let favFood = "Rice"

switch (true) {
    case favFood === "Beans":
        console.log(`Thats right! ${favFood} is my favorite`)
        break;

    case favFood === "Bread":
        console.log(`Thats right! ${favFood} is my favorite`)
        break;

    case favFood === "Oil":
        console.log(`Thats right! ${favFood} is my favorite`)
        break;

    case favFood === "Pancake":
        console.log(`Thats right! ${favFood} is my favorite`)
        break;    

    default:
        console.log(`Thats damn right! ${favFood} is my favorite`)
        break;
}

let favFud = "Pie";

switch (favFud) {
    case "Pie":
        console.log(`Thats right! ${favFood} is my favorite`)
        break;

    case "Bean":
        console.log(`Thats right! ${favFood} is my favorite`)
        break;

    case "Pizza":
        console.log(`Thats right! ${favFood} is my favorite`)
        break;

    case "Orange":
        console.log(`Thats right! ${favFood} is my favorite`)
        break;

    default:
        break;
}


let message = '';

let message2 = 1 > 10 ? "Condition is True" : "condition is False";

console.log(message2)


let time = 12;

let message3 = time <= 12 ? 'Good morning' : 'Good evening';
console.log(message3);



// Loops: allow us to do repetitive task with less code

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}


let colors = ['Red', 'Green', 'Yellow', 'Blue', 'Brown'];


for (let color = 0 ; color < colors.length ; color++) {
    console.log(`${color} is my fav color!`);
}


x = 0;

while (x <= 100) {
    console.log(`The speed of the car is ${x}MPH`)
    x += 10;
}

let a = 1;
let b = 10;

do{
    console.log(a)
    a++
} while (a <= 10);


let countries = ['Spain', 'Italy', 'France'];

countries[3] = 'Monaco';

console.log(countries);


let Colours = ['Red', 'Yellow', 'Brown', ['Pink', 'Gray', 'Blue']]

console.log(Colours[3][2]);



// length propetry

let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];

console.log(supers[supers.length - 1]);



let fruits = ['apple', 'orange', 'banana'];

fruits.unshift('cherry', 'pineapple');
fruits.push('plum', 'grapes')
fruits.splice(3,1, 'lemon')
fruits.sort()
console.log(fruits)

// Array iteration 
supers.forEach(
    function (value, index, array) {
        console.log(`${value}`)
    }
)

// map method is used to return the copy of the original array; with maps you can copy an original array, create a function and then pass the new array to a newly created variable then console log it.

function upperCase(value) {
    return value.toUpperCase();
}

let supersCap = supers.map(upperCase);
console.log(supersCap);



// filter; takes each value in our array and applies a conditional statement to it, if its true then the value gets added to an original array, if false then it doesnt add to the new array

let numbers = [1, 2, 3, 50, 45, 77, 12, 34, 76, 90, 13, 100]

let evenNumbers = numbers.filter(
    function (value, index, array) {
        return value % 2 === 0;
    }
)
console.log(evenNumbers)

// Reduce method; this method will run a function on each value inside the array to reduce the array down into a single value... frequently used on numbers.

let numberss = [1, 2, 3, 50, 45, 77, 12, 34, 76, 90, 13, 100]
 function add(total, value, index, array) {
    return total + value;
 }

 let sum = numberss.reduce(add);
 console.log(sum);

// some method; iterates over an array to check if the given condition is true for at least one of the value, if no value passes the test then it returns false. only one value has to pass the test to return true.

let numbersss = [1,2,3,11];

let higherThanTen = numbersss.some(
    function (value) {
        return value > 10;
    }
);

console.log(higherThanTen);


// Every; all conditions have to meet the test to return true else false



let numba = [11, 20, 30, 40, 60];

let allHighernumber = numba.every(
    function (value) {
        return value > 10;
    }
);

console.log(allHighernumber);

// find method; iterates over our array to find a certain value if the array contains the value then it returns that value but if it doesnt then it returns undefined.

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// let findSupers = supers.find(
//     function (value) {
//         return value === 'Aquaman'
//     }
// );

// console.log(findSupers);


// findindex similar to the find() method, this method returns just the index of the value.
let findSupers = supers.findIndex(
    function (value) {
        return value === 'Aquaman'
    }
);

console.log(findSupers);


// task
let fruit = ['Apple', 'Orange', 'Banana'] 

fruit.forEach(
    function (value, i) {
        console.log(`${i} - ${value}`)
    }
)


function toUpperCase(value) {
    return value.upperCase();
}

let newFruits = fruit.map(upperCase);
console.log(newFruits);

let fruitCaps = fruit.map(
    function (v,i,a) {
        return v.toUpperCase();
    }
);

console.log(fruitCaps);

let fruit3 = fruit.every(
    function (value) {
        return value.length > 3;
    }
)

console.log(fruit3)

// Set and Weak Set; by default set guards against duplicate value

// let Fighters = ['Scorpion', 'sub zero', 'Reptile', 'Lu-Kang']
const newSet = new Set();
newSet.add('Scorpion').add('Sub-Zero').add('Reptile').add('Lu-Kang')

newSet.forEach(
    function (value) {
        console.log(value)
    }
);


// Map and weak map; map is a collection of keyed data items similar to an object, map allows key of any type