// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function removeChar(str, position){
    part1 = str.slice(0, position);
    part2 = str.slice(position+1, str.length);

    return(part1+part2);

}
console.log(removeChar("w3resource", 1));