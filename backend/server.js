const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 3001

app.use(cors())
app.use(bodyparser.json()); 


let records = [
    { type: 'bank-draft', title: 'Bank Draft', position: 0 },
    { type: 'bill-of-lading', title: 'Bill of Lading', position: 1 },
    { type: 'invoice', title: 'Invoice', position: 2 },
    { type: 'bank-draft-2', title: 'Bank Draft 2', position: 3 },
    { type: 'bill-of-lading-2', title: 'Bill of Lading 2', position: 4 },
  ]

app.get("/v1/cards", (req, res) => {
  res.json({cards: records})
})

app.post("/v1/cards", (req, res) => {
    const { cards } = req.body;

    setTimeout(() => {
      records = cards;
      res.json({cards: records})
    }, 1000);

  })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})