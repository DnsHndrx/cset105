function reverses(num){
    let user= prompt("Please enter a number:")
    let number= Number(user)

    if(user==Number){

    return(

        parseFloat(
            num
                .toString()
                .split("")
                .reverse()
                .join("")


        ) * Math.sign(num)

    )
    }
}

function palindrome(n){
    let person= prompt("Please enter a word:")
    if(  n===n.reverse ){
        return(
            console.log("True")
        )
    }
    else
        return(
            console.log("False")
        )
}

function webmaster(str){
    str=str.split("")
    str.sort((a,b)=> a>b ? 1: -1)
    return str.join("")
   
}

console.log(webmaster("webmaster"))

function counting(str){
    let count = 0
    for(let i; i< str.length; i++){
      if(str[i]=='a' ||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
      count++
    }
    return count
}

console.log(counting("The quick brown fox"))

function join(arr){
   return arr.join(".")
}
let myColor= ["Red","Green", "White", "Black"]
console.log(join(myColor))

var firstElement= [7,9,0,-2]
    console.log(firstElement.slice (0,1))
    
function twice(arr){
    let double=[];
    for (let j=0; j<arr.length; j++){
        if(double.indexOf(arr[j])=== -1){
            double.push(arr[j]);
        }
    }
    return double;
}
let arr_1=[1,3,6,6,7,9,9];
let arrDouble= twice(arr_1);
console.log(arrDouble);

function sumArrays (arr1,arr2){
    let result = [];
    let a = 0;
    let b=0;
    if (arr1.length===0) 
     return "arr1 is invalid";
    if (arr2.length===0) 
     return "arr2 is invalid";   
   while (a < arr1.length && a < arr2.length) 
    {result.push(arr1[a] + arr2[a]);
      a++;
    }
   if (a === arr1.length) 
   { for (b = a; b < arr2.length; b++)
      {result.push(arr2[b]);
      }
    } 
    else {
    for (b = a; b < arr1.length; b++) 
      {result.push(arr1[b]);
      }
    }
    return result;
  }
  console.log(sumArrays([1,0,2,3,4], [3,5,6,7,8,13]));

function addMulti(array){
      let sum=0
      let product=1
      for(let y=0,array.length;y++){
          sum+=array[y]
          product*=array[y]
      }
      return 'Sum is' + sum + 'product is'+ product
  }
let arr=[2,8,9,10,12,15]
console.log(addMulti(arr))

function noNeed(d){
    For(
        if(let arry[d]=== null){
        let arry.splice(d,1);
    }
        if(let arry[d]=== 0){
        let arry.splice(d,1);
    }
        if(let arry[d]=== '\"'){
        let arry.splice(d,1);
    }
        if(let arry[d]=== false){
        let arry.splice(d,1);
    }
        if(let arry[d]=== undefined){
        let arry.splice(d,1);
    }
        if(let arry[d]=== NaN){
        let arry.splice(d,1);
    }
    )
}

let arry=[NaN,0,15,false,-22,'"', undefined, 47, null]
console.log(noNeed(arry))