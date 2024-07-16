// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers. 

let a = [232,42,5,11];

// sorting
// a.sort((a,b) => a-b);
// let n = a.length;
// let differ = a[n-1]-a[0];
// console.log(differ);

// using max and min
// let b = Math.max(...a);
// let c = Math.min(...a);
// console.log(b-c);

// using iterations
let b=0;
function wpp18(a){
for(let i =0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        
        let differ = Math.abs(a[j]-a[i]);
        if(differ > b){
            b=differ;
            
        }
    }
   }
   return b;
}
console.log(wpp18(a));


