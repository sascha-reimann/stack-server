require("dotenv").config();

const express = require('express');
const { initDb, connectDb } = require("./db/database");
const dbFunctions = require('./db/database');
const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.static('public'));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    try {
        res.render('index');
    } catch (err) {
        console.log(err);
    }
});
app.get("/edit:id", (req, res) => {
    try {
        res.render("edit");
    } catch (err) {
        console.log(err);
    }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
