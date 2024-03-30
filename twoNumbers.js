
//write a function that uses two numbers to generate an array. 
// in this case, pass two parameters in our function which indicates starting number and end.
function generateArray(startingNumber, end){
    
    // initialize our array, which empty still.
    let y = [];
    
// use a for loop, to get the numbers as below.
    for ( i = startingNumber; i <= end; i++){
        // after getting the number, we now push it to our array.
        // now our array is supposed to have something.
        y.push(i)
        

    }
    //return the generated array.
    return y;
};
// test the function by calling it using different pair of numbers.
// use console.log() check the output.
console.log(generateArray(4,7));