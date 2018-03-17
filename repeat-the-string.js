
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0){
    var strRepeat = str.repeat(num);
    return strRepeat;
  }
  return "";

}

repeatStringNumTimes("abc", 3);
