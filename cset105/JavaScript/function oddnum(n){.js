function oddnum(n){
    return Boolean(n % 2);
}

function oddSum(no){
    let sum=0;
    for (let i=0; i< no; i++){
        if(oddnum(i)){
            sum+= i;
        }
    }
    return sum
}