var name="ankit"

// cal(a,b)
// require("./xyz.js");  
// const {x,cal}=require("./calcu/sum");
// const {multi}=require("./calcu/mul.js");
// import {x,cal} from "./sum.js"; 
var a=10;
var b=20;  
const {cal,x,multi}=require("");
const data=require("./data.json");
console.log(data);
cal(a,b);
console.log(x);
multi(a,b);     
// console.log(a+b); 
// console.log(global);

console.log(globalThis==global);