// Write a JavaScript program to check whether a string starts with 'Java'  if it does not then  return False.

function check(str){
    if(str.slice(0,4) == 'Java'){
        return true;
    }
    else{
        return false;
    }
}

console.log(check('JavaScript'));

console.log(check('Java is fun'));