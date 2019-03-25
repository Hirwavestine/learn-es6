
const characters=[{name:"KEn the Ninja", age:30},
                {name:"Master White", age:10000},
                {name:"Ben the Baby Ninja",age:5}
            ];
            
for(i=0; i<characters.length;i++){
    console.log("........");
const character=characters[i];
//print "My name is ---""
    console.log(`My name is ${character.name}`);
    //add if statements below
    //Handling undefined
    if(character.age===undefined){
        console.log("My age is a secret!");
         }else{
    console.log(`I am ${character.age} years old`);
}
