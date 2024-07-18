// Write a JavaScript program to reverse the order of bits in an integer. 
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87

function wpp20(a){
    let binary = a.toString(2);

    while(binary.length<8){
        binary = '0' + binary;
    }

    let reversedbinary = parseInt(binary.split('').reverse().join(''),2);
    
    // let reversenum = parseInt(reversedbinary,2);

    return reversedbinary;
}

console.log(wpp20(14)); // 112