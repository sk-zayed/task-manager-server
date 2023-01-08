const mongoose = require("mongoose");

//global configuration for queries
mongoose.set("returnOriginal",false);
mongoose.set("runValidators", true);

//creating models
require("../models/Users");
require("../models/Boards");
require("../models/Cards");

const {DB_USER, DB_HOST, DB_NAME, DB_PASS} = process.env;

const connectionStr = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

console.log("Connecting to DB...");

const connect = async () => {
    try{
        await mongoose.connect(connectionStr);
        console.log(`Connected to DB ${DB_NAME}`);
    } catch(error) {
        console.log(error.message);
        throw error;
    }
};

module.exports = {
    connect
};