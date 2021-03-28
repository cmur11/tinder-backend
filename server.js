import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
// adds headers to every request, security
import Cards from "./dbCards.js";

// App Config
const app = express();
// creates instance ^^
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:WMIik2GO3lrE7GWX@cluster0.5awzi.mongodb.net/tinderdb?retryWrites=true&w=majority"
// selects PORT
debugger

// Middlewares
app.use(express.json());
app.use(Cors());
// Db Config
mongoose.connect(connection_url, {
    // paramters that make connection smooth
    userNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
//  API Endpoints

app.get("/", (req, res) => res.status(200).send("HELLO WORLD!"));
// will be base URL

app.post("/tinder/cards", (req,res) => {
    const dbCard = req.body;
   
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});


app.get("/tinder/cards", (req,res) => {

    Cards.find((err,data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));


// admin
// autogenerate password
// WMIik2GO3lrE7GWX

//URL:  mongodb+srv://admin:<password>@cluster0.5awzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority