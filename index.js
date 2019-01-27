// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"]



// Array functions
// appends a driver to the end of the drivers array ‣
function destructivelyAppendDriver(name) {
    return drivers.push(name);
};



// prepends a driver to the beginning of the drivers array ‣
function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
};



// removes the last driver from the drivers array ‣
function destructivelyRemoveLastDriver() {
    return drivers.pop();
};



// removes the First driver from the drivers array ‣
function destructivelyRemoveFirstDriver() {
    return drivers.shift();
};



// appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged ‣
function appendDriver(name) {
    return drivers.concat(name);
};



// prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged ‣
function prependDriver(name) {
    // var arr = [23, 45, 12, 67];
    // arr = [34, ...arr];
    return [name, ...drivers];
};



// removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged ‣
function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
};



// removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged ‣
function removeFirstDriver() {
    return drivers.slice(1);
};







//
