
function mutation(arr) {

	// var strNew = "";
	var countFalse = 0;
	// arr = arr.toLowerCase();

	for (var i = 0; i<arr[1].length;i++){
		if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) == -1){
			return false;
		}
	}
	return true;
	
}

console.log(mutation(["hello", "hey"]));
