function mini (c,d,){
    if (c<d){
        return c;
    }
    if (d<c){
        return d;
    }
    else {
        return "NaN"
    }
}

console.log(mini(1,9))