function swap(arr,xp, yp) 
{ 
    var temp = arr[xp]; 
    arr[xp] = arr[yp]; 
    arr[yp] = temp; 
} 
  
function selectionSort(arr,  n) 
{ 
    var i, j, min_idx; 
  
    for (i = 0; i < n-1; i++) 
    { 
        min_idx = i; 
        for (j = i + 1; j < n; j++) 
        if (arr[j] < arr[min_idx]) 
            min_idx = j; 
  
        swap(arr,min_idx, i); 
    } 
} 
  
function printArray( arr,  size) 
{ 
    var i; 
    for (i = 0; i < size; i++) 
        document.write(arr[i] + " "); 
    document.write(" <br>"); 
} 
  
var arr = [64, 25, 12, 22, 11]; 
    var n = 5; 
    selectionSort(arr, n); 
    document.write("Sorted array: <br>"); 
    printArray(arr, n); function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {

        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
