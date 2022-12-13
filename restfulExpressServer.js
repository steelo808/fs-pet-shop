import express from "express";
import { readFile } from "node:fs/promises";
import morgan from "morgan";
const app = express();
const port = 3000;

const sql = postgres({database: "petshop"});

app.use(express,json());//using middleware middle ware allows us to look at incoming request and if content type is json then it formats the filenpm install
app.use(morgan("tiny"));

app.get("/pets", (req, res)=>{
    sql`SELECT * FROM pets`.then((pets)=>{
        res.json(pets);
    })
});

//return response status 200 content type application/JSON
app.get("/pets", (req, res)=>{
    readFile("./pets.json", "utf-8").then((text)=>{
        console.log(text);
        res.json(JSON.parse(text));
    });
});



app.get("/pets/:index", (req, res) =>{
    const index = req.params.index;
    readFile("./pets.json", "utf-8").then((text) =>{
        const pets = JSON.parse(text);
        const selectedPet = pets[index];
    if(selectedPet !== undefined){
        res.json(selectedPet)
    }else{
        res.status(404);
        res.set("Content-Type", "text/plain");
        res.send("Not Found");
    }
    });  
});


app.patch("/pets/:index", (req, res) =>{


});


app.listen(port, function(){
    console.log('Server is running on port 3000');
});
