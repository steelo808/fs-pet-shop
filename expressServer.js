import express from "express";
import { readFile } from "node:fs/promises";
const app = express();
const port = 3000;

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



app.listen(port, function(){
    console.log('Server is running on port 3000');
});
i
