import { multiply0, multiply1 } from "./chapter1"

function printOutput(n : number, a : number, result : object) : void {
    console.log('' + n + ' x ' + a + ' = ' + result['value']);
    console.log('' + result['operations'] + ' operations');
}

var n = 41;
var a = 59;

console.log('=== using multiply0 ===');
printOutput(n, a, multiply0(n, a));

console.log('=== using multiply1 ===');
printOutput(n, a, multiply1(n, a));
