const express = require("express");
const app = express();
const routes = require("./routes");

const port=3000; 
const address="localhost"; //local host é o nome padrão do seu computador e está ligado ao IP 127.0.0.1 

app.use('/',routes);g

const server = app.listen(port,address, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`servidor executando no endereço ${host} e porta ${port}`);
});