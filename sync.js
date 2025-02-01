
// console.log("ankit singh");
// var a=1939,b=2939;
// function mul(a,b){
//     const r=a*b;
//     return r;
// }
// var c=mul(a,b);
// console.log("multiply :",c);



// Define a constant variable
const a = 100;

// Use setImmediate to schedule a task
setImmediate(() => {
  console.log("setImmediate");
});

// Create a Promise and resolve it immediately
Promise.resolve().then(() => {
  console.log("Promise");
});

// Use setTimeout to schedule a task
setTimeout(() => {
  console.log("Timer expired");
  
}, 3000);

// Use process.nextTick to schedule a task
process.nextTick(() => {
  console.log("process.nextTick");
});

// Define a function that prints the value of a
function printA() {
  console.log("a", a);
}

// Call the printA function
printA();

// Log a message to the console
console.log("Last Line of the file.");