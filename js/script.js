import myVariable, { myVariable2 as myVar, myVariable3 } from "./components/three/second.js";

console.log(myVariable);
console.log(myVar);
console.log(myVariable3);

export const myVar4 = "var 4";

export function logSomething() {
    console.log("I am a function");
}
