
// write a function that changes the case of each character.
function swapCase(str){
    // we use str.split('') to convert/ split the string into an array of characters and,
    //then use the map() method to iterate over the characters and swap cases based on whether they are uppercased or lowercased.
    return str.split('').map((line) =>{
        if (line === line.toUpperCase()){
            return line.toLowerCase();
        }
        else{
            return line.toUpperCase();
        }
    
    }).join(''); // lastly, use ',join('')' to combine all the characters to return our wanted single string.


}
// then console log our function, pass in any string to output the results.
console.log(swapCase('The Brown Quick Fox')); 