// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
function wpp11(a,b,c){
     if(b>a && c>b){
        return "Strict Mode";
     }
     else if(b>=a && c>=b){
        return "Soft Mode";
     }
     else{
        return "Neither Strict mode nor Soft mode";
     }
}
console.log(wpp11(1,3,4));