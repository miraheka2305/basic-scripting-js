
function factorialize(num) {
  	var factor = 1;
	for (var x = 1; x<=num; x++){
		factor *= x;
	}  
  	return factor;
  
}

console.log(factorialize(4));

