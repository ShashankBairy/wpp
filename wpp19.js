// Write a JavaScript program to find the number appearing most frequently in a given array of integers. 

let arr = [1,1,2,3,1,1,4,5,6];

function wpp19(arr) {
    var ctr = [],  
      ans = 0;     
  
    // Initialize the counter array with zeros for each possible element
    for (var i = 0; i < 10; i++) {
      ctr.push(0);
    }
  
   
    for (var i = 0; i < arr.length; i++) {
      ctr[arr[i] - 1]++;  
      if (ctr[arr[i] - 1] > ctr[ans]) {
        ans = arr[i] - 1;  
    }
  
    return ans + 1;  
  }
}
console.log(wpp19(arr));
  
