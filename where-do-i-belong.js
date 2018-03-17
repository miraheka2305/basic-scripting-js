
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
 	arr = arr.sort(function(a,b){
 		return a-b;
 	});

  	var index = arr.findIndex(arr=> arr>= num);
  	if (index == -1){
  		index = arr.length;
  	}
  return index;
}

console.log(getIndexToIns([2,5,10], 50));
