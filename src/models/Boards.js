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
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        likedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
        ],
        completed: {
            type: Number,
            default: 0,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

boardSchema.virtual("progress").get(function () {
    return (this.completed / this.cards.length) * 100;
});

mongoose.model("Board", boardSchema);
