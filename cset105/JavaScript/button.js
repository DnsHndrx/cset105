function getValues(s){
    let v= document.getElementById(s.id).innerHTML
    document.getElementById("result").value+= v
}

function clearValues(c){
    document.getElementById("result").value=""
}

function equalTo(){
    document.getElementById("result").value= eval(document.getElementById("result").value)
}

function deleteNum(){
    let y= document.getElementById("result").value.split("")
    y.pop()
    y.join("")
    document.getElementById("result").value=y.join("")
}