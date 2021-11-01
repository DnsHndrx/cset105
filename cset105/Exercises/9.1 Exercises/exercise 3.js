function noupper(){
    let x= prompt("Enter Word/Sentence: ");
    for(let y=[a=0]; z=x.charCodeAt(a);)
    { y[a++] =String.fromCharCode(z|(z>96 && z<123));
    }
    alert(y.join(""))
}

console.log(noupper());