// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
function newstring(str){
    const lastthreechar = str.slice(-3);
    return lastthreechar+str+lastthreechar;
}
console.log(newstring("Shashank"));