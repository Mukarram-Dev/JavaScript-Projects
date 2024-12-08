function findMedian(arr) {
  // Sort the array in ascending order
  let sortedArr = arr.sort((a, b) => a - b);
  let medianNum = 0;
  console.log(`Sorted Array: ${sortedArr}`);

  if (sortedArr.length % 2 == 0) {
    let mid1 = sortedArr[sortedArr.length / 2 - 1];
    let mid2 = sortedArr[sortedArr.length / 2];
    medianNum = Math.floor((mid1 + mid2) / 2);
  } else {
    medianNum = sortedArr[Math.floor(sortedArr.length / 2)];
  }

  return medianNum; // Return the median as a number
}

// Example usage:
const array = [1, 2, 4, 6, 5, 3, 7];
console.log(findMedian(array));
