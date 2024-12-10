// Q1
//1. Implement the createCounter function

function createCounter(){
    let value = 0;
    return {
        increment : function() {
            value++;
            console.log(value);
        },
        decrement : function() {
            value--;
            console.log(value);
        }
    }
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement();

//2. Explain how closures are being used to encapsulate the counter variable.

/* A closure is formed when a function remembers the variables
the variables from its outer scope even after the outer function has finished 
execution this ability to "close over" variables gives closures their name. 
Here:
    1) The createCounter() defines a local variable 'value' (initialized to 0),

    2) The increment and decrement methods are defined within createCounter(),
    where they have access to the value variable form their outer scope.

    3) Onces crrateCounter() is called, it returns an object containing these 
    methods, and the returned methods retain access to the value variable even 
    though createCounter() has finished executing. 

    4) This effectively encapsulates the value variable, making it private. 
    External code cannot access or modify value directly; it can only interact 
    with it through the provided methods (increment and decrement).
*/

//3. What happens if multiple counters are created using the same function?
// Provide examples to demonstrate this behavior.

/* Everytime createCouter() is called, a new execution context is created is 
created, and new instance of the value variable is initialized. Which means 
that multiple counters will operate independently because each closure has 
its own copy os the value variable.
eg:

*/

function createCounter() {
    let value = 0;
    return {
        increment: function () {
            value++;
            console.log("Incremented value:", value);
        },
        decrement: function () {
            value--;
            console.log("Decremented value:", value);
        }
    };
}

// Create two independent counters
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();
counter1.decrement();

counter2.increment(); 
counter2.increment(); 
counter2.decrement(); 

console.log("counter1 and counter2 are independent!");