const day = new Date();
const cmas = new Date(day.getFullYear(), 11, 26);
if(day > cmas ){
        cmas.setFullYear(cmas.getFullYear()+1);
}
const one_day = 1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-day.getTime())/(one_day)) + " days left until Christmas");