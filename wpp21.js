// Write a JavaScript program to remove all characters from a given string that appear more than once.

function wpp21(str){
    let result = '';
    let charCount = {};
    for(let i = 0; i < str.length; i++){
        if(charCount[str[i]] == undefined){
            charCount[str[i]] = 1;
            result += str[i];
        }
    }
    return result;
}

console.log(wpp21("Hello World")); // Output: Helo Wrld