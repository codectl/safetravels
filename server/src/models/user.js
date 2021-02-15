import mongoose from "mongoose";

const {Schema} = mongoose;

// The User schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            index: true,
        },
        email: {
            type: String,
            unique: true,
            index: true,
        },
        password: {
            type: String,
            trim: true,
        },
        displayName: String
    },
    {timestamps: true}
);

// The User model
const User = mongoose.model("user", UserSchema);

export default User;
