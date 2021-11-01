function max(...numbers){
    //...=lets functions accept any number of arguments
    let result= -Infinity;
    for(let number of numbers) {
        if(number>result) result=number;
    }
    return result
}
console.log (max(x,y,z))
