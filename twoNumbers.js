
//write a function that uses two numbers to generate an array. 
// in this case, we pass two parameters in our function which indicates starting number and end.
function generateArray(startingNumber, end){
    
    // initialize our array, which empty still.
    let y = [];
    
// use a for loop, to get the numbers in between as below.
    for ( i = startingNumber; i <= end; i++){
        // after getting the numbers, we now push it to our array.
        
        y.push(i);
        
//  now our array is supposed to have something.
    }
    //return the generated array.
    return y;
};
// test the function by calling it using different pair of numbers.
// use console.log() to check the output.
console.log(generateArray(4,7));