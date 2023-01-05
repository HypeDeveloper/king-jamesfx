const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Add your name"],
        },
        username: {
            type: String,
            required: [true, "Add a username"],
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Add an email address"],
            unique: true,
        },
        country: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: [true, "Add a password to secure your account"],
        },
        userRefCode: {
            type: String,
        },
        inviteRefCodeID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        inviteCount: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);
