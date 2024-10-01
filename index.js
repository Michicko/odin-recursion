function fibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  // fib(n) = fib(n - 2) + fib(n - 1)
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(6));
// console.log(fibonacci(8));

function merge(leftArray, rightArray, array) {
  let leftLength = Math.floor(array.length / 2);
  let rightLength = array.length - leftLength;

  let i = 0;
  let j = 0;
  let k = 0;

  while (j < leftLength && k < rightLength) {
    if (leftArray[j] < rightArray[k]) {
      array[i] = leftArray[j];
      i++;
      j++;
    } else if (rightArray[k] < leftArray[j]) {
      array[i] = rightArray[k];
      i++;
      k++;
    }
  }

  while (j < leftLength) {
    array[i] = leftArray[j];
    i++;
    j++;
  }

  while (k < rightLength) {
    array[i] = rightArray[k];
    i++;
    k++;
  }

  return array;
}

function mergeSort(array) {
  let copy = [...array];
  let length = copy.length;

  if (length <= 1) return;

  let middle = Math.floor(length / 2);
  let leftArray = copy.slice(0, middle);
  let rightArray = copy.slice(middle);

  mergeSort(leftArray);
  mergeSort(rightArray);
  return merge(leftArray, rightArray, array);
}

// console.log(mergeSort([3, 7, 5, 4, 2, 6, 1]));
// console.log(mergeSort([1, 4, 8, 5, 7, 2, 6, 3]));
// mergeSort([3, 7, 5, 4, 2, 6, 1]);
