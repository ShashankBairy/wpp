function closerto100 (num1, num2){

    if(num1 != num2){

        x1 = Math.abs(num1-100);
        x2 = Math.abs(num2-100);
        if(x1<x2){
            return x1;
        }
        if(x1>x2){
            return x2;
        }
        return 0;
    }
    else{
        return false;
    }
}
console.log(closerto100(90,110));