// const person: {
//    name: string;
//    age:  number;
// } = {
const person = {
    name: 'Lionel',
    age: 38,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby);
    //console.log(hobby.map()); !!! ERROR map does not exist in type string!
}