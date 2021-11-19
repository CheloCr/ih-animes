
// 1.-IMPORTS
const express = require("express")
const app = express ()

require("dotenv").config()

const connectDB = require("./config/db")

// 2.- MIDDLEWARES: Es una funcion que se ejecuta después de recibir una petición y antes de dar una respuesta.

// Trabajar con archivos estáticos: 
app.use(express.static(__dirname + "/public"))

// Configuraciones ----> Que motor de vistas vamos a usar.
app.set("views",__dirname + "/views")
app.set("view engine", "hbs")

connectDB()

// 3.- RUTAS
//ruta para home.
app.get("/", (req,res) => {
    res.render("index")
})



// 4.- SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`Puerto funcionando en puerto http://localhost:${process.env.PORT}`)
})