const mongoose = require("mongoose");
// const Card = mongoose.model("Card");

const boardSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String, 
            required: true,
        },
        description: String,
        lanes: {
            type: Array,
            default: ["ToDo", "Doing", "Done"],
        },
        image: String,
        dueDate: Date,
        cards: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Card",
            },
        ],
        liked: {
            type: Boolean,
            default: false
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

// boardSchema.virtual("xyz").get(async function(){
//     const completedCards = await Card.find({board: _id, progress: 100}).count();
//     const totalCards = await Card.find({board: _id}).count();
// })

mongoose.model("Board", boardSchema);