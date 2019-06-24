const express = require('express');
const nunjucks =  require('nunjucks');

const app = express();


/**
 * configuração do nunjucks para funcionar tipo o nodemom para as paginas html.
 * Com isso não será necessário ficar atualizando ou parando o servidor quando uma alteração for efetuada.
 */
nunjucks.configure('views', {
   autoescape: true,
   express: app,
   watch: true,
});

// habilitar o express a receber parametros de formulários;
app.use(express.urlencoded({extended: false}));

//app.set -> seta configurações globais na app.
app.set('view engine', 'njk');


const users = ['Diego', 'Teobaldo', 'Maria Jose'];

//esse metodo utiliza o midleware(apenas o metodo é usado.)
app.get('/', (req,res) => {
    return res.render('list', { users });
});

app.get('/new', (req, res) => {
    return res.render('new');
});

app.post('/create', (req, res) => {
    //console.log(req.body); //req.body recebe o corpo dos parametros passados pelo formulario.
    const user = req.body.user;
    users.push(user);
    return res.redirect("/");
});

app.listen(3000);
