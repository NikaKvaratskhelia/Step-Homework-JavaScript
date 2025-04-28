let books = [
  {
    title: "book 1",
    year: 2008
  },

  {
    title: "book 2",
    year: 2011
  },

  {
    title: "book 3",
    year: 2015
  },

  {
    title: "book 4",
    year: 1996
  }
];

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i].year > arr[i+1].year) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(books);
console.log(bubbleSort(books));
