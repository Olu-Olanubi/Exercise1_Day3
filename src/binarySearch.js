
 
Array.prototype.search =  function(n){

var last = this.length - 1;
var first = 0;
var count = 0;
  


//initially, first is always less than last,but as the iterations continue
// first will become larger than last, if n is not in the Array

  while(first <= last){
    //var mid = first + Math.floor((last - first)/2);
    var mid = Math.floor((first+last)/2);
    if(this[mid] < n){
      first = mid + 1;
    }
    else if(this[mid] > n){
      last = mid - 1;
   }
    else if (this[mid] === n){
      this.index = mid;
      
      this.count = count;
    
       return {"count": count, "index": this.index, "length": this.length};
   }
  count++;
  this.count = count;
  
  
}

this.index = -1;
this.count = count;
return {"count": count, "index": this.index, "length": this.length};

}


Array.prototype.toTwenty = function(){
  var newArray = [];
  for(i = 1; i <=20; i++){
    newArray.push(i);
    }
    return newArray;
 }
  
Array.prototype.toForty = function(){
  var newArray = [];
  for(var i = 2; i <= 40; i+=2){
    newArray.push(i);
  }
  return newArray;
}
  
Array.prototype.toOneThousand = function(){
    var newArray = [];
    for(var i = 10; i <= 1000; i+=10){
      newArray.push(i);
  }
  return newArray;
}

