let count=0;
function sayHello(){
    let child= document.createElement("h1");
    child.innerHTML= "Hello There! "+ ++count;

    let div= document.getElementById("div");
    div.appendChild(child);
}

function whoClickedMe(thing){
    console.log(thing);
    console.log(thing.id);
    console.log(thing.attributes);
    console.log(thing.value);
}