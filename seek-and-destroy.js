function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i<arr.length; i++){
  	for (var j = 0; j < args.length; j++) {
  		if (arr[i] == args[j]){
  			delete arr[i];
  		}
  	}
  }
  return arr.filter(Boolean); //menghilangkan falsy
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
