
function calculateSum(num1, num2) {
    return num1 + num2;
  }
  
  
  function isEven(number) {
    return number % 2 === 0;
  }
  
  
  function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
      if (num > max) {
        max = num;
      }
    }
    return max;
  }
  
 
  function reverseString(str) {
    let reversed = "";
    for (let char of str) {
      reversed = char + reversed;
    }
    return reversed;
  }
  
  
  function filterOddNumbers(arr) {
    const oddNumbers = arr.filter(number => number % 2 !== 0);
    return oddNumbers;
  }
  
  
  function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  
  
  function sortArray(arr) {
    return arr.sort((a, b) => a - b); 
  }
  
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  console.log(calculateSum(5, 4)); 
  console.log(isEven(13)); 
  console.log(findMax([1, 5, 7, 2]));
  console.log(reverseString("Hello")); 
  console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); 
  console.log(sumArray([2, 7, 13])); 
  console.log(sortArray([3, 5, 4, 1, 15, 9])); 
  console.log(capitalizeFirstLetter("hello world")); 
  