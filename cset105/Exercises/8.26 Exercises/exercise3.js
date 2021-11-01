for(let p=1; p<=50; p++){
    console.log(p)
}
for(let o=0; o<25; o++){
    console.log(o)
}
for(let z=0; z<25; z++){

    if (z%2==1){
        console.log(z)
    }
}
for(let i=0; i<25; i++){

    if (i%3==0){
        console.log(i)
    }
}
let t= 0;
do
{
    console.log(t);
    t=t+5
} while(t<=50)
for(let l=0; l<=50; l++){

    if (l%2==0 || l%3==0){
        if(l%2==0 && l%3==0){
        }
        if(l%2==0 && 1%3!=0){
            console.log(l)
        }
        if(l%3==0 && 1%2!=0){
            console.log(l)
        }
    }
}
for(let y=0; y<=100; y++){

    if (y%2==0 || y%3==0){
        if(y%12!=0){
            console.log(y)
        }
    }
}