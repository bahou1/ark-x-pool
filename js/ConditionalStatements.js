var day = Math.ceil(Math.random() * 7);;

if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Unvalid Day");
}


let a = -15;
let b = 6;
let c = 2.6;

if(a >= b && a >= c) {
  console.log("The maximum number is: " + a);
} else if (b >= a && b >= c) {
  console.log("The maximum number is: " + b);
} else {
  console.log("The maximum number is: " + c);
}


let score = Math.ceil(Math.random() * 100);

if (score > 85) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 55) {
  console.log("Grade: C");
} else if (score >= 40) {
  console.log("Grade: D");
} else if (score >= 15) {
  console.log("Grade: E");
} else {
  console.log("Grade: F");
}
