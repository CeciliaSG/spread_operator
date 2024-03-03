/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

/* Gives us more powerful ways of manipulating JavaScript arrays.
* By using the ... three dots operator in an array */

// No spread operator (doesn't actually copy, but points to the first array)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("second array:", arr2);


// Copying an array

let arr3 = [4, 5, 6];
let arr4 =[...arr3];
arr4.push(7);
console.log('array3:', arr3)
console.log('array4:', arr4)

// Copying an object (also works for copying an object, and overriding/chaning a value in the original object )
let obj1 = { a: 1, b: 2, c: 3};
let obj2 = { ...obj1, d: 4};
let obj3 = { ...obj1, b: 5};

console.log('obj1:', obj1)
console.log('obj3:', obj3)


// Copying only part of an array/object

let arr5 = [ ...arr1, { ...obj1}, ...arr3, 'x', 'y', 'z'];
console.log('array5:', arr5)
