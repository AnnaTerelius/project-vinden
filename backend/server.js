import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/vinden"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

console.log("hello world")

const Item = mongoose.model("Item", {
    title: String,
    tag: [String]
})

Item.deleteMany().then(() => {
    new Item({title: "cutlery", tag: ["dinner", "wedding"]}).save();
    new Item({title: "plate", tag: ["wedding"]}).save();
    new Item({title: "glas", tag: ["wedding"]}).save();
    new Item({title: "lamp", tag: ["dinner"]}).save();
    new Item({title: "candle", tag: ["wedding"]}).save();
    new Item({title: "flowers", tag: ["wedding"]}).save();
    new Item({title: "tablecloth", tag: ["childrensparty"]}).save();
    new Item({title: "napkins", tag: ["childrensparty"]}).save();
})


// Defines the port the app will run on. Defaults to 8000, but can be 
// overridden when starting the server. 
const port = process.env.PORT || 8000
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining routes here
app.get('/', (req, res) => {
  Item.find().then(items => {
      res.json(items)
  })
})

//search all tag types in database
app.get("/tags", async (req, res) => {
    const tags = await Item.find().distinct("tag")
    res.json(tags)
})

app.get("/items", async (req, res) => {
const items = await Item.find()
res.json(items)
})

//search on searchString {"b":10}
app.get("/:tag", (req, res) => {
    //Item.find({tag: req.params.tag}).then(item => {
        Item.find({"tag":req.params.tag}).then(item => {
        if(item) {
            res.json(item)
        }else {
            res.status(404).json({error: "Not found"})
        }
    })
})


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })