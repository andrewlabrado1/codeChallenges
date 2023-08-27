// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//P: Are you ever given an empty array or undefined? What then? Are you always given digits?
//R: Whatever number was given, it is now split up into an array and the order of the numbers is reversed. 
//E: If we were given 35231 => [1,3,2,5,3]
//                    330 => [0,3,3]
//                    undefined => not a number
//P: Make a function that takes in a number 
function reverseArray(num){
    //make number a string and split
    return String(num).split('').reverse().map(Number)
    //reverse array
    
    //make array integers again and return
}

reverseArray(35231)//should return [1,3,2,5,3]
console.log(reverseArray(330))
