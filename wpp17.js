// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.

function wpp18(str){
        let result = '';
        for(let i =0;i<str.length;i++){
            let char = str[i];

            if(char >= 'a' && char<= 'z'){
                if(char === 'z'){
                    result += a;
                }
                else{
                    result += String.fromCharCode(char.charCodeAt(0) +1);
                }
            }
        }
        return result;
}

console.log(wpp18("hello")); // Output: "ifmmp"