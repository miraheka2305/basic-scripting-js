
function titleCase(str) {
	var strSplit = str.toLowerCase().split(" ");
	var strTitleCase = "";
	for (var i = 0; i < strSplit.length; i++) {
		strTitleCase +=  strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
		if (i !== strSplit.length-1){
			strTitleCase += (" ");
		}
	}
 //  return str.charAt(0).toUpperCase() + str.slice(1);
 return strTitleCase;
}

console.log(titleCase("I'm a little tea pot"));
