function chunkArrayInGroups(arr, size) {
  var arrJoin = [] ;
  if (arr.length%size == 0)    {
    for (var i = 0; i < arr. length; i+= size) {
    	arrJoin.push(arr.slice(i,i+size));
    } 
    
  } else {
    var temp = Math.floor(arr.length/size);
    var tempCount = arr.length -  (temp*size) ;
    for (var i=0; i<temp*size; i+=size) {
     arrJoin.push(arr.slice(i,i+size));
    } 
    arrJoin.push(arr.slice(temp*size,arr.length));
  } 
  return arrJoin;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));