let arr= ["milk","eggs", "juice", "bacon", "cheese"];

arr.push("cookies")
//.push= push item at end of array
arr.unshift("banana")
//.unshift= pushes item to beginning of array

for(a of arr){
    console.log(a)
    //a=each item of array
}

for(let i=0; i< arr.length; i++){
    console.log(arr[i])
}

console.log(arr.length)
//finds length of array
arr.pop() 
//.pop deletes last item from array
for(let i=0; i< arr.length; i++){
    console.log(arr[i])
}
arr.shift() 
//.shift deletes first item from array
for(let i=0; i< arr.length; i++){
    console.log(arr[i])
}

