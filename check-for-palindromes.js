
function palindrome(str) {
	  var strSplit = [];	
	  var strNew  =  str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
	  var strJoin = strNew.split(' ').join('');
	  for (var x = 0; x <= (strJoin.length-1); x++){
	  	strSplit[x]= strJoin[(strJoin.length-1)-x];
	  }
	  strSplit = strSplit.join("");
	  if (strJoin === strSplit){
	  		return true;
	  } else {
	  	return false;
	  }

	  return strSplit;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));