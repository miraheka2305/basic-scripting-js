function reverseString(str) {
  var strReverse = [];

  for (var i = 1; i<= str.length; i++){
      strReverse[i] = str.charAt(str.length-i);
      joinedStr = strReverse.join("");
  }

  return joinedStr;
  
}

console.log(reverseString("hello"));