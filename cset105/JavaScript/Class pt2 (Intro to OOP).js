class person{
    constructor(name){
        this.name=name;
    }

    greeting(){
        console.log('Hi! I\'m '+ this.name +'.');
    }
}

let p =new person("James");
p.greeting();
console.log(p)