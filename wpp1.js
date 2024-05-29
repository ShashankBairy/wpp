const now = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thrusday", "Firday", "Saturday"];
const day = days[now.getDay()];

console.log(`Today is : ${day}`);

const hours = now.getHours();
const ampm = hours>=12? 'PM' : 'AM';
const hour = hours>=12 ? hours-12:hours; 
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log("Current time is : "+hour+ampm+":"+minutes+":"+seconds);