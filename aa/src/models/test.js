const mongoose = require("mongoose");
const User = mongoose.model("User");
const Board = mongoose.model("Board");
const Card = mongoose.model("Card");

const foo = async () => {
    try {
        //home
        // const userBoards = await Board.find({owner: "63b1d1dff04ef046d93009fa"}).populate("cards");
        // console.log("userBoards --> ", userBoards[0].cards[0].progress);

        // board detailed
        // const board = await Board.find({owner: "63b1d1dff04ef046d93009fa"}).populate("cards");
        // console.log(board);
        // console.log("board --> ", await board.progress);
        // const cardsInBoard = (await board.populate("cards")).cards;
        // const toDoArr = [];
        // const doingArr = [];
        // const doneArr = [];
        // cardsInBoard.forEach(card => {
        //     if(card.lane === "ToDo"){
        //         toDoArr.push(card);
        //     } else if(card.lane === "Doing") {
        //         doingArr.pudh(card);
        //     } else if(card.lane === "Done"){
        //         doneArr.pudh(card);
        //     }
        // });

        // console.log("boardDetail --> ", board);
        // console.log("cardsInBoard --> ", cardsInBoard);
        // console.log("toDoArr --> ", toDoArr);
        // console.log("doingArr --> ", doingArr);
        // console.log("doneArr --> ", doneArr);
        // console.log("boardProgress --> ", board.progress);

        // const boardData = {
        //     owner: "63b1d1dff04ef046d93009fa",
        //     title: "Board 7",
        //     image: "img_url",
        //     dueDate: "2023-01-03"
        // };

        // const res = await Board.create(boardData);
        // await res.populate("owner")
        // console.log("Board added --> ", res);

        // const user = await User.findById("63b1d1dff04ef046d93009fa");
        // await user.populate("boards")
        // console.log("User data --> ", user);

        const cardData = {
            board: "63b480eb7a6185a7144d1d4e",
            lane: "ToDo",
            title: "manuall :)",
            description: "Description",
            priority: "High",
            dueDate: "2023-01-03",
            tasks: [
                {
                    done: false,
                    title: "Task 1"
                },
                {
                    done: true,
                    title: "Task 2"
                },
                {
                    done: true,
                    title: "Task 2"
                }
            ],
            image: "img_url",
        };

        // const completed = cardData.tasks.filter(task => task.done === true).length;
        // console.log({...cardData, completed: completed});

        // const card = await Card.create({...cardData, completed: completed});
        // console.log("card --> ", card);

        // const card = await Card.findById("63b5e165a33f9b36d8c630a5");
        // console.log("card --> ", card);

        // console.log("board cards --> ", await Card.find({board: "63b480eb7a6185a7144d1d4e"}).where("completed").equals(2));
        // console.log(
        //     "board cards --> ",
        //     await Card.find(
        //         { board: mongoose.Types.ObjectId('63b480eb7a6185a7144d1d4e'), title: "Title 8" }
        //     )
        // );

        // await Card.updateOne({_id: "63b5e165a33f9b36d8c630a5"}, {$push: {tasks: {done: true, title: "Task 5"}}});
        // const board = await Board.updateOne({_id: "63b4507ac282b7604b39aef2"}, {$push: {cards: card._id}});
        // await board.populate("cards");
        // const board = await Board.findById("63b4507ac282b7604b39aef2").populate("cards").populate("owner");

        // console.log(await Board.updateOne({cards: {$in: "63b6bfc86ae58735353d0dc6"}}, {$pull: {cards: "63b6bfc86ae58735353d0dc6"}}));
        // console.log(await Board.findById("63b6b649581592cf04abd872"))
    } catch (error) {
        console.log("catch --> ", error);
    }
};

foo();
