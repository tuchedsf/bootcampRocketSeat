const express = require('express');

const app = express();

/**
 * O midleware pode ser usado para trocar modificar valores na aplicação.
 * ex: req.appName todas as requisições caso faça referencia ao appName.
 * 
 * se quizer que o midleware interrompa a execução não coloca return next() 
 * e cria um retorno msg para o cliente 
 */
const logMiddlware = (req, res, next) =>{
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method} `
    );
    req.appName = "GoNode";

    return next();   
}

//outra forma de usar os middlewares é app.use, esse forma carrega o midleware para todas as rotas existesnes na app
//evitar ter q colocar o middleware em todas as rotas individualmente.
app.use(logMiddlware);

//esse metodo utiliza o midleware(apenas o metodo é usado.)
app.get('/',logMiddlware, (req,res) => {
    return res.send("heloo word");
});


app.get('/login',(req,res) => {
    return res.send("login");
});

http://localhost:3000/nome/teobaldo
app.get('/nome/:name',(req,res) => {
    //return res.send(`Bem vindo, ${req.params.name}`);
    return res.json({
        message: `Welcome ao ${req.appName}, ${req.params.name}`
    });
});

//queryParams ?xcv=sdf
//http://localhost:3000/nomes/?name=teobaldo
app.get('/nomes/',(req,res) => {
    return res.send(`Bem vindo, ${req.query.name}`);
});
app.listen(3000);