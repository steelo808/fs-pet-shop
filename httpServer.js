import http from "node:http";
import { readFile } from "node:fs/promises";


const server = http.createServer((req, res) =>{
    if(req.method === "GET" && req.url === "/pets"){
        readFile("./pets.json", "utf-8").then((text)=>{
            res.setHeader("Content-Type", "application/json");
            res.end(text);
        });
    }else {
        res.end("unknown request");
    }
});

server.listen(3000, () =>{
    console.log("Server running on port 3000");
});