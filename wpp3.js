const num = Math.ceil(Math.random()*10);
console.log(num);

const guessnumber = prompt("Guess the number between 1 to 10");
if(guessnumber == num){
    console.log('Good Work');
}
else{
    console.log('Not matched');
}
