const express = require("express")
const app = express();

app.set("port", process.env.PORT || 3000)

app.get("/products", (req, res) => {
    res.json([{
        name: "Heladera",
        precio: 250,
    },
    {
        name: "Cocina",
        precio: 300,
    }

    ])
})

app.get("/users", (req, res) => {
    const { limit, offset } = req.query

    if (limit && offset) {
        res.json ({
            limit,
            offset
        })
    } else {
        res.send("no hay nadadadad")
    }
})
