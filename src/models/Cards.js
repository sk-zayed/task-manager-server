const mongoose = require("mongoose");
const Board = mongoose.model("Board");
const cardSchema = new mongoose.Schema(
    {
        board: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        lane: {
            type: String,
            default: "ToDo",
        },
        description: String,
        priority: String,
        dueDate: Date,
        tasks: Array,
        completed: Number
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);


cardSchema.virtual("progress").get(function () {
    return (this.completed / this.tasks.length) * 100;
});

cardSchema.post("save", async function (doc) {
    console.log("doc --> ", doc);
    // this.completed = this.tasks.filter((task) => task.done === true).length;
    await Board.updateOne({ _id: doc.board }, { $push: { cards: doc } });
});

cardSchema.pre("update", async function (doc) {
    console.log("up --> ", doc);
    this.completed = this.tasks.filter((task) => task.done === true).length;
});

mongoose.model("Card", cardSchema);