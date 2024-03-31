PHASE 1 WK2: CODE CHALLENGE.

Date: 30/3/2024.

Written By: Omondi Maurine.

Challenges.
1. Write a function that accepts a string as input and swaps the case of each character.

2. Write a JavaScript function that accepts two numbers to generate an array between them.

3. You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. 

INTRODUCTION.

This code challenge require us to solve the above challenges respectively using Javascript. All these challenges are stored in one repository/folder and can be accessed on my github account.

Let's Get Started.

1. WRITE A FUNCTION THAT ACCEPTS A STRING AS INPUT AND SWAPS THE CASE OF EACH CHARACTER.

To solve this;

We'll  write a 'swapCase' function that changes the case of each character and pass str as a parameter(this parameter indicates that our function will only accept strings). 

        function swapCase(str){}
we'll then use 'str.split('')' to convert the string into an array of characters and, then use the 'map()' array method to iterate over the characters and swap cases based on whether they are in uppercase or lowercase.  Within the map() we will incoperate 'if... else' , to check if the conditions are true or false.
            return str.split('').map((line) =>{
                    if (line === line.toUpperCase()){
                        return line.toLowerCase();
                    }
                    else{
                        return line.toUpperCase();
                    }
            
                }).join(''); 
 lastly, use ',join('')' to combine all the characters to return our wanted single string.
Then console log our function, pass in any string to output the results.

    console.log(swapCase('The Brown Quick Fox')); 


2. WRITE A JAVASCRIPT FUNCTION THAT ACCEPTS TWO NUMBERS TO GENERATE AN ARRAY BETWEEN THEM.

To solve this:

We'll write a 'generateArray' function which takes in two variables as parameters that is  'startingNumber' to accept the first number, and 'end' to accepts the second number.
    function generateArray(startingNumber, end){}
We'll then initialize our array inside our function which is supposed to be empty.
    let y =[];

Then, use a 'for..loop' to iterate over our given numbers to generate the numbers in between.
    for ( i = startingNumber; i <= end; i++){}
    
After getting our numbers we then use a 'push()' array method inside our 'for..loop'to push the numbers in our original array.
    y.push(i);
we then return our array which now supposed to have something in it.
    return y;
   
Finally, test the function by calling it using different pair of numbers.
Use console.log() to check the output.
    
    console.log(generateArray(8,12));


3. WRITE A FUNCTION THAT TAKES AN ARRAY OF NUMBERS AS INPUT AND RETURNS A NEW ARRAY CONTAINING ONLY PRME NUMBERS FROM THE ORIGINAL ARRAY.

To solve this:
We'll initialize our array which will serve as the original array.

    const m = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

We'll then write a 'isPrime' function that checks if the number is prime,
            function isPrime(num){
                for(let i = 2; i < num; i++){
                    if (num % i == 0){
                        return false;
                    }  
                }
                return num > 1;
            };

Then use 'filter()' array method to filter and return prime numbers only from the original array.

    const myPrimeArray = m.filter(isPrime);

We'll then check the ouput using 'console.log()'
    console.log(myPrimeArray);


Technology used: Javascript only.

Support and contact details: github.com/Maurine6

    License:
The content of this site is licensed under the MIT license
Copyright (c) 2018.
