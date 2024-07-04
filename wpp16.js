// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3

function wpp16(arr){
    if(arr.length<1){
        console.log("Length of array is less than 1");
    }

    [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]];

    return arr;
}

console.log(wpp16([1, 2, 3]));