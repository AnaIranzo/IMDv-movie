const express = require('express');
const port = 3000;

const app= express();

app.use(express.json()); 

// Template engine
app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", "./views");


app.get("/login", (req,res)=> {
    res.render("singIn")
})

app.get("/logup", (req,res)=> {
    res.render("singUp")
})

app.get("/menu", (req,res)=> {
    res.render("firstViewMenu")
})

app.get("/search", (req,res)=> {
    res.render("searchFilm")
})

app.listen(port, () => console.log(`Serving on ${port} http://localhost:3000`));
