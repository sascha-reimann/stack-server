require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const TEMPLATE_PATH = "/private/templates/";

app.use(express.static('public'));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    try {
        //res.sendFile("index", { root: __dirname + TEMPLATE_PATH });
        res.render('index');
    } catch (err) {
        console.log(err);
    }
});
app.get("/edit:id", (req, res) => {
    try {
        res.sendFile("edit", { root: __dirname + TEMPLATE_PATH });
    } catch (err) {
        console.log(err);
    }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));