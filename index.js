require("dotenv").config();

console.log(process.env.START_UP);

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;