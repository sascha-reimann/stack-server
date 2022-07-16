require("dotenv").config();

console.log(process.env.START_UP);

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const TEMPLATE_PATH = "/private/templates/";

app.use(express.static('public'));

app.get("/", (req, res) => {
    try {
        res.sendFile("index.ejs", { root: __dirname + TEMPLATE_PATH });
    } catch (err) {
        console.log(err);
    }
});
app.get("/edit:id", (req, res) => {
    try {
        res.sendFile("edit.ejs", { root: __dirname + TEMPLATE_PATH });
    } catch (err) {
        console.log(err);
    }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));