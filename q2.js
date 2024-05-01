let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, "dd"];

function arrOffNumbers(arr) {
  let even = 0;
  let odd = 0;
  let toReturn = {};

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      console.log(arr[i], "not a number");
    }
    if (arr[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  toReturn.even = even;
  toReturn.odd = odd;
  toReturn.total = arr.length;
  console.log(toReturn);
}

arrOffNumbers(arr);
