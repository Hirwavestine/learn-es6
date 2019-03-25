//arrays&iteration
const characters=[{name:"KEn the Ninja", age:30},
                {name:"Master White", age:10000},
                {name:"Ben the Baby Ninja",age:5}
            ];
            //complete the for loop
for(i=0; i<characters.length;i++){
    console.log("........");
    //define the character const
const character=characters[i];
//print "My name is ---""
    console.log(`My name is ${character.name}`);
//print "I am --- years old"
    console.log(`I am ${character.age} years old`);
}
