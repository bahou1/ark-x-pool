function bubbleSort(arr) {
    var len = arr.length;
    var i = 0;
  
    // Outer loop using a while loop
    while (i < len - 1) {
      var j = 0;
  
      // Inner loop for comparisons and swaps
      while (j < len - 1 - i) {
  
        // Compare adjacent elements
        if (arr[j] > arr[j + 1]) {
  
          // Swap elements if they are in the wrong order
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
  
        // Increment the inner loop counter
        j++;
      }
  
      // Increment the outer loop counter
      i++;
    }
  
    // Return the sorted array
    return arr;
  }
  
  // Example usage:
  var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  var sortedArray = bubbleSort(unsortedArray);
  console.log("Sorted Array:", sortedArray);
  