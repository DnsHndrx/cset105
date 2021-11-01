const person={
    name:{
        first:'Bob',
        last:'Smith'
    },
    age: 32,
    gender: "male"
    interest: ['music', 'skiing'],
    bio: function(){
        console.log(this.name[0]+' ' +this.name[1]+ ' is '+ this.age)
    },
    greeting: function(){
        console.log('Hi I\'m ' + this.name[0]+ '.')
    }
};

console.log(person.name.first)