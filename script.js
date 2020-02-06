// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

let min = function(n, n2) {
  if (n >= n2) {
    return n2;
  }
    return n;
};

console.log(min(0, 10));
console.log(min(0, -10));

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

let calculateCircumference = function(n) {
    let pi = 3.14;

    return 2 * pi * n;

};

console.log(calculateCircumference(5)); 

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

let searchString = function(chr, str) {
    let numberOfCharactersFound = 0;

    while (i = 0, i <= str.length -1, i++) {
        if (str[i] == chr) {
            numberOfCharactersFound++
        }
        return numberOfCharactersFound;
    }
};

console.log(searchString("s", "mississippi"));
console.log(searchString("q", "mississippi"));