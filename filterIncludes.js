// Filter can filter out what you dont want from an array

const myArray = [1, 2, 3, 4, 5];

const newArray = myArray.filter(el => el > 3)

// Anything returned as true will be added to the new array
console.log(newArray)

// Includes method checks if an array includes a certain value returns true or false
console.log(myArray.includes(3))

// We can also include the index of the array in which we are searching from 0 to n

// Index start value ; Value to search for
console.log(myArray.includes(3, 2))

// {id: 1} is not stored in the array so it will return false
const objArray = [{id: 1}, {id: 2}, {id: 3}]

console.log(objArray.includes({id: 3}))

const o1 = {id: 1}
const o2 = {id: 2}
const o3 = {id: 3}


// 
const newObjArray = [o1, o2, o3]

// o3 is stored in the array so it will return true
console.log(newObjArray.includes(o3))

// Objects VS Primitive Types

// Primitive types are strings, numbers, booleans, null, undefined, symbols which exist inside of JS memory bank
// If we have a = 1 and b = 1 then a and b are pointing to 1 but if we have a = b a is pointing to b which is pointing to 1