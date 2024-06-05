function wpp10(str){
    if(str.length < 3){
        return  str.toUpperCase();
    }
    else{
        return str.slice(0,3).toLowerCase()+ str.slice(3);
    }
}
console.log(wpp10("SHASHANK"));
console.log(wpp10("hi"));