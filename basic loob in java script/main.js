
/*
for(let i=1; i<=10; i++){
    console.log (i);
}

for(let i=1; i<=10; i++){
    if(i%2==0){
    console.log (i);


    }}

let number = 1;

while (number <= 10) {
  if (number % 2 == 1) {
    console.log(number);
  }
  number++;
}

let number = prompt("enter a number ");

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(number + " * " + i + " = " + result);

}

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

console.log( sum);  



let num=prompt("enter factorial num")

for(let i=1; i<=num; i++)
    
    {
        let result = num * i;
console.log(i +"*" +num+"="+ result);
}

let userInput = parseInt(prompt("Enter a number to print the Fibonacci series up to: "));

let a = 0, b = 1, next;

while (next < userInput) {
  console.log(next);
  next = a + b;
  a = b;
  b = next;
}
*/
let currentNumber = 20; // Start with the largest number

while (currentNumber >= 5) {
  console.log(currentNumber);
  currentNumber -= 5; // Decrement by 5 to print in reverse order
}

   

