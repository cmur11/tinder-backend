// outline structures of cards inside database
import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})


export default mongoose.model("cards", cardSchema);

// define connection database, no tables in NoSQL databases

// collection > [document] > collection > [documents]