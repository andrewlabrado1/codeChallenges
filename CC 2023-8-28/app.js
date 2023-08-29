// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


//Parameters: 
    //Is it always going to be integers? Are we going to be given any special characters? An empty arr ever?
//Return: 
    //Return a new array with each value doubled
//Examples: 
    //If we are given [2,3,4], should return [4,6,8]
    // If we are given [4,5,6], should return [8,10,12]
    // If we are given [2,22], should return [4,44]
//Psuedo Code: 
    // Make a function that takes in an array
    function doubled(arr){
        return arr.map(num => num * 2)
    }

    // Map through the array and multiply each element by 2 and return new array
    doubled([1,2,3])
    console.log(doubled([2,3,4]),[4,6,8])