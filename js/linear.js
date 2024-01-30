function linearSearch(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}
const myArray = [3, 6, 8, 2, 9, 1];
const targetElement = 8;
const result = linearSearch(myArray, targetElement);

if (result !== -1) {
    console.log(`${targetElement} found at index ${result}.`);
} else {
    console.log(`${targetElement} not found in the array.`);
}
