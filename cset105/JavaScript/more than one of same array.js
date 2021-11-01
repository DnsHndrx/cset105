let arr_1=[25,30,50,15,23,25,40,60,30,14,30,40]

function twice(arr_1){
    let x= arr_1[0]
        y= arr_1[1];
        return(x==30&&y==30) || (x==40&&y==40)
}
console.log(twice([30,30]));
console.log(twice([40,40]));