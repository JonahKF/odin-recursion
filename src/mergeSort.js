const mergeSort = (arr) => {
  // Base case - arr is size one
  if (arr.length === 1) {
    return arr;
  }

  // cut arr in half, perform mergeSort
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const merge = (leftArr, rightArr) => {
    let newArr = [];
  };

  return merge(mergeSort(left), mergeSort(right));
};

const testArr = [3, 2, 1, 13, 8, 5, 0, 1];

// Demonstration of splitting arr in half
// console.log(testArr.slice(0, Math.floor(testArr.length / 2)));
// console.log(testArr.slice(Math.floor(testArr.length / 2), testArr.length));

console.log(mergeSort(testArr));
// Expecting "[0, 1, 1, 2, 3, 5, 8, 13]"
