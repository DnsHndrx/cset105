//let arr= ["milk","eggs", "juice", "bacon", "cheese"];


//for(let i=0; i< arr.length; i++){
    //console.log(arr[i])
//}

//let items= arr.lastIndexOf("cheese", 4)
    //.lastIndexOf= starts at end
    //.indexOf= taking in periameters to find
    // where an item is in an array
//console.log(items)

var good =["Mario","Luigi","Kirby", "Yoshi"]
var bad= ["bowser", "koopa", "koomba"]

good.splice(2,0 "Pranjol")
//.splice= will add item stated but if second parameter 
//is stated will delete that many after the new item
var result = good.concat(bad)
//.concat= concatanation

console.log(result.slice (2,4))
//.slice = will only print within perameters 
//(must ALWAYS put a starting point)
