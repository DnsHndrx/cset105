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