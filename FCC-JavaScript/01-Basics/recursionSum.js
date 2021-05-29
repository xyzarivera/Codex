// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

const array = [5, 6, 7, 8, 9]


function sum(arr, n) {
    // Only change code below this line
    var tot = 0;

    if (n <= 0) {
        tot = 0;
    } else {
        tot = sum(arr, n - 1) + arr[n-1];
    };
    return tot;
    // Only change code above this line
};

const total = sum(array, 3);
const realTotal = 5 + 6 + 7;

console.log('total', total);
console.log('realTotal', realTotal);
