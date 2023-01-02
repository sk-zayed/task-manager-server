const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "general"],
        default: "general"
    }
});

const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

userSchema.path("password").validate(function(value){
    return passwordPattern.test(value);
});

const SALT_FACTOR = 10;

// pre hook
userSchema.pre("save", function(done) {
    const user = this // const user = new User();
    if(!user.isModified("password")) {
        done();
        return;
    }

    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if(err) {
            return done(err); // doc won't get inserted/updated
        }

        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
                return done(err);
            }

            user.password = hash;
            done();
        });
    });
});


mongoose.model("User", userSchema);