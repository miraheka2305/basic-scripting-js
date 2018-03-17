function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var strSub = str.substr((str.length-target.length),target.length);
  if (strSub === target){
    return true;
  }
  return false;
}

confirmEnding("Bastian", "an");
