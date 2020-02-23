/*
// Test Control Flow
let myPersonality = "friendly";

if (myPersonality === "mean") {
  console.log(myPersonality);
  
  } else if (myPersonality === "weird") {
    console.log(myPersonality);
  } else {
    console.log("Sorry none of the conditions passed!");
}




// Variables

// Declare with 'var'
var a = "letter 1", b = "letter 2", c = "letter 3", d = "Hello!", e = "you found me", f = "f is for funk!";
console.log(a);
console.log(a, b, c, d, e, f);

*/

// Scope

function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  };
}

// var myScope = outerFunction();
// console.log(myScope);
// console.log(innerScope());


const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];
 
var myStuff = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(myStuff);

const letters = ["alpha", "gamma", "delta"];
console.log([...letters.slice(0, 1), "beta", ...letters.slice(1)]);

