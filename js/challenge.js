
function sumNumbers(array){

  let total = 0;
  for( let num of array){
      total = total + num;
  }
  return total;
  }
  console.log(sumNumbers ([1,2,3,7]))

///////////////////////////////////////////////
  function countEven(numbers) {
    let count = 0;
  
    for (let number of numbers) {
      if (number % 2 === 0) {
        count++;
      }
    }
  
    return count;
  }
  // example
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = countEven(numbersArray);
  
  console.log("Count of even numbers:", result);
  //////////////////////////////////////////////
  function double(numbers) {
    const doubledArray = numbers.map(number => number * 2);
    return doubledArray;
  }
  
  const inputArray = [4, 2, 7];
  const doubledResult = double(inputArray);
  
  console.log("Original array:", inputArray);
  console.log("Doubled array:", doubledResult);
  /////////////////////
  function sockMerchant(socks) {
    const colorCount = {};
    let totalPairs = 0;
  
    for (const color of socks) {
      if (!colorCount[color]) {
        colorCount[color] = 1;
      } else {
        colorCount[color]++;
  
        if (colorCount[color] % 2 === 0) {
          totalPairs++;
        }
      }
    }
  
    return totalPairs;
  }
  
  console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2]));
  console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); 
  console.log(sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
  console.log(sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
  