
// initialize array.
const m = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// write a function that checks if the number is prime,
function isPrime(num){
    for(let i = 2; i < num; i++){
        if (num % i == 0){
            return false;
        }  
    }
    return num > 1;
};

// use filter function to filter prime numbers from the original array.
const myPrimeArray = m.filter(isPrime);

// check the ouput using 'console.log()'
console.log(myPrimeArray);