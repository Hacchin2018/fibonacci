'use strict';
var nn = 0;
var nm = 0;
function fib(n) {
    if (n === 0) {
        nn = n;
        return 0;
    } else if (n === 1) {
        nm = 1;
        return 1;
    }
    // return fib(n-1)+fib(n-2);
    var nx = nn + nm;
    nn = nm;
    nm = nx;
    return nx;
}

const length = 100;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}