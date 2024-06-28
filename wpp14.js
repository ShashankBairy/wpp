// Write a JavaScript program to extract the first half of an even string. 

function wpp14(str){
    if(str.length %2 !== 0){
        return "This string length is not even";
    }
    const midpoint = str.length/2;
    return str.slice(0,midpoint);
}
console.log(wpp14("helloo"));