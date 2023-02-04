const { PORT } = require("dotenv").config().parsed;
const express = require("express");
const app =  express();

app.use(express.json());

const vehicles = require("../routes/vehicles");
app.use("/vehicles", vehicles);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`))