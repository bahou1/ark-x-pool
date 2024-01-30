// Task 1 : Factorial
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log(" The factorial of "+n+ ' is: '+factorial);

//Task 2 : How many digits ?

let num = 123542;
let count = 0;
let temp = num;

while (temp !== 0) {
    temp = Math.floor(temp / 10);
    count++;
}

console.log("the number of digits in " + num + " is: " + count);

//Task 3 :  Time to draw !

var rows = 6;
for (var i = 1; i <= rows; i++) {
        var row = "";

    for (let k = 1; k <= rows - i; k++) {
        process.stdout.write(' ')
      }
    
    for (var j = 1; j <= i; j++) {
        row = row + "* "

    }
    
    console.log(row);

}