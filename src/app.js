const express = require('express')
const indexRoutes = require("../src/routes/index.routes")

const app = express();

app.set("view engine", "ejs"); 

app.use(express.static('public')); // To use for take excess of CSS and js file in public folder 

app.use(express.json());

app.use(express.urlencoded({extended : true })); // for form-urlencoded read the data 

app.use('/', indexRoutes)

module.exports = app;