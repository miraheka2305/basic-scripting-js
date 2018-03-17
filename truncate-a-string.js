
// function truncateString(str, num) {

//   // Clear out that junk in your trunk
//   var strNew = "";
//   var indexSpace = 0;
//   var strSplit = str.split();
//   if (str.length >= num){
//   	if (strSplit[0]<= num){
//   		for (var i = 0; i < num;i++){
//   			if (str[i] === " "){
//   				indexSpace = i;
//   			}
//   			strNew = str.slice(0,indexSpace) + "...";
//   		}
//   	} else {
//   		strNew = str.slice(0,num) + "...";
//   	}
//   } else {
//   	strNew = str + "...";
//   }
//   return strNew;
// }

//advance 

function truncateString(str, num) {
  if (str.length > num)
    return str.slice(0, num > 3 ? num-3 : num) + '...';
  return str;
}

//basic 
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

// source : freecodecamp
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));