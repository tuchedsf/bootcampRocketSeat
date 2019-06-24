const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

const midleware = (req, res, next) => {
  const age = req.query.age;
  //const {age} = req.query; //poderia ser feito desta forma.
  if (isNaN(age) || age == "" || age == null) { // if (!age)
    return res.redirect("/");
  }
  next();
};

// habilitar o express a receber parametros de formulários;
app.use(express.urlencoded({ extended: false }));

//app.set -> seta configurações globais na app.
app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/check", (req, res) => {
  const age = req.body.age;
  //console.log(age);
  if (age >= 18) {
    return res.redirect(`/major?age=${age}`);
  }
  return res.redirect(`/minor?age=${age}`);
});

app.get("/major", midleware, (req, res) => {
  const age = req.query.age;
  return res.render("major", { age });
});

app.get("/minor", midleware, (req, res) => {
  const age = req.query.age;
  return res.render("minor", { age });
});

app.listen(3000);
