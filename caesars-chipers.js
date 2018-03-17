
function rot13(str) { // LBH QVQ VG!
	var codeA = "A".charCodeAt(0);
	var codeN = "N".charCodeAt(0);
	var codeZ = "Z".charCodeAt(0);

	return str.split(" ")
	.map.call(str,function(char){
		currentChar = char.charCodeAt(0);
		if (currentChar>=codeA && currentChar<=codeZ){
			if(currentChar>=codeN){
				return String.fromCharCode(currentChar-13);
			} else{
				return String.fromCharCode(currentChar+13);
			} 
		}
		else {
			return String.fromCharCode(currentChar);
		}
	}).join("");

}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
//source : https://codereview.stackexchange.com/questions/132125/rot13-javascript
//source : hint frecodecamp
// console.log(String.fromCharCode(97)); >> munculin hurufnya apa
//console.log("A".charCodeAt(0)) >> munculin indeksnya berapa