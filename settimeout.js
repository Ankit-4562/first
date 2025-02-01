
console.log("ankit singh");
var a=1939,b=2939;
setTimeout(()=>{
    console.log("call me after 0 seconds");
    },0);
setTimeout(()=>{
console.log("call me after three seconds");
},3000);
function mul(a,b){
    const r=a*b;
    return r;
}

var c=mul(a,b);
console.log("multiply :",c);
