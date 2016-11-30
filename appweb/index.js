// index.js
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/dosave", (req,res) => {
  console.log("os dados recebidos do formulário são:");
  console.log(req.body);
  res.send("<h1>Sucesso!</h1><a href='index.html'>voltar </a>");
});

app.post("/adivinha", (req,res) => {
  console.log(req.body);
  res.send("<h1>Sucesso!</h1><a href='numero.html'>voltar </a>");  
});

app.post("/convidados", (req,res) => {
  console.log(req.body);
  res.send("<h1>Sucesso!</h1><a href='moderno.html'>voltar </a>");  
});

app.listen(3000);
console.log("app online");
