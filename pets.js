// Usage: node pets.js [read | create | update | destroy]
import { readFile } from "node:fs/promises";

const subcommand = process.argv[2];//
console.log(process.argv[2]);

if (subcommand === "read") {
const petIndex = process.argv[3];
readFile("./pets.json", "utf-8").then((text) => {
    const pets = JSON.parse(text);//changing string into an object
    if (petIndex === undefined) {
    console.log(pets);
    } else {
    console.log(pets[petIndex]);
    }
})
.catch((e) =>{
    console.error("Could not find pets.json. Does it exist?");
})
}else if (subcommand === "create"){
const age = process.argv[3];
const name = process.argv[4];
const kind = process.argv[5];
const pet = {age, name , kind};
readFile("./pets.json", "utf-8").then((text)=>{
const pets = JSON.parse(text);
pets.push(pet);
const text = JSON.stringify(pets)
});

}

else {
console.error("Usage: node pets.js [read | create | update | destroy]");
process.exit(1);
}

