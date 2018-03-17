
function findLongestWord(str) {
  var strSplit = str.split(" ");
  var minVar = 0;
  for (var i=0; i<strSplit.length;i++){
  	if (minVar < strSplit[i].length)
  	{
  		minVar = strSplit[i].length;
  	}
  }

  return minVar;
}

console.log(findLongestWord("May the force be with you"));
