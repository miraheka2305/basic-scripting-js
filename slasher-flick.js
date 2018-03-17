
function slasher(arr, howMany) {
  // it doesn't always pay to be first

  var arrNew = [];
  if (arr.length >= howMany)
    {
      arrNew = arr.slice(howMany, arr.length);
    } else {
      arrNew = [];
    }
  return arrNew;
}

console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
