//Without Higher-Order
persons= [
    {name: 'Peter', age: 16},
    {name: 'Mark', age: 18},
    {name: 'John', age: 27},
    {name: 'Tony', age: 24},
];
const fullAge=[];
for(let i=0; i<persons.length; i++){
    if(persons[i].age>=18){
        fullAge.push(persons[i])};
    }

console.log(fullAge);
//With Higher-Order
const pwesons = [
    {name: 'Peter', age: 16},
    {name: 'Mark', age: 18},
    {name: 'John', age: 27},
    {name: 'Tony', age: 24},
];

const fullName= persons.filter(person=> person.name>= 'Tony');
console.log(fullName)