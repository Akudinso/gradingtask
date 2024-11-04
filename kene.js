

function run (name, speed) {

    return `${name} runs at the ${speed}m/s of light`
}

console.log(run('Kene', 2));


class Animal {
    constructor (name, age) {
        this.name = name,
        this.age = age
        
    }
    run = function () {
        return `${this.name} is ${this.age} years old`
    }

    swim = function () {
        return `${this.name} is ${this.age} years old`
    }
}

class Rabbit extends Animal {
    name = 'Rabbit'


}

class Fish extends Animal {
    name = 'Fish'

    
}

class Hawk extends Animal {
    name = 'Hawk'

    
}

const Animal1 = new Animal ('Kene', 50, run())
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.swim());
console.log(fish.run());
console.log(hawk.run());

// var objectName = {
//     key : value,
//     run()
    
// }

// objectName.run()

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",

//     run: function () {
//         console.log(`${this.firstName} is running`)
//     }
//   };



// person.run()




class Person {
    constructor(name, age) {
      this.name = name;
      let _age = age; // hidden internally with underscore naming
      this.getAge = () => _age; // encapsulated way to get age
    }
  }
  
  let john = new Person("John", 30);
  console.log(john.getAge()); // Accessible age: 30



class Animal4 {
    constructor(name, age) {
        this.name = name;
        let _age = age;
        this.getAge = ()=> _age;

    }
  }

let rat = new Animal4("Rattie", 3)
console.log(rat.getAge())