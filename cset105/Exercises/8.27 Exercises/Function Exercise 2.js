function mini (c,d,e){
    if (c<d && c<e){
        return c;
    }
    if (e<d && e<c){
        return e;
    }
    if (d<e && d<c){
        return d;
    }
    else {
        return "NaN"
    }
}

console.log(mini(3,1,9))