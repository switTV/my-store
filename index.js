const express = require("express");
const app = express();
const PORT = 3000;

app.get("/products", (req, res) => {
    res.json([{
        type: "remera",
        name: "Remera Trasher",
        talle:"XL",
        precio: 122,
        img_producto: "https://imgs.search.brave.com/wtdeUV5-ofK4s8v76Io3FehhMZ3i8rKtQUs6EGLZb2U/rs:fit:1100:1100:1/g:ce/aHR0cHM6Ly93d3cu/Ymxvd2xhbmQuY29t/LmFyLzE2NzE3LXRo/aWNrYm94X2RlZmF1/bHQvcmVtZXJhLXRo/cmFzaGVyLWZsYW1l/LWxpZmVzdHlsZS1u/aW5vLmpwZw"
    },
    {
        type: "pantalon",
        name: "Pantalon Adidas",
        talle: 12,
        precio: 40,
        img_producto: "https://imgs.search.brave.com/ak2hskGe_7ht4f7JOBQtNOMWSxfOi9z3iYSxEN_tMcQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZnV0Ym9sLWZh/Y3RvcnkvaW1hZ2Uv/dXBsb2FkL2NfcGFk/LGZfYXV0byxoXzIw/MDAsd18xNjAwL3Yx/L3Byb2R1Y3RzLzIy/NDg4OF8yLmpwZw"
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
        res.send("no se encuentra la info, fijate el link.")

    }
})



app.listen(PORT, () => {
    console.log('Mi puerto es: ' + PORT);
})
