// Array methods

// Map method goes through each element within the array and performs a certain code to it
const myArray = [1, 2, 3, 4, 5];

// New array created
const newArray =  myArray.map(el => el + 1)

const thirdArray = newArray.map(el => "b")

console.log(newArray, thirdArray)

