import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        profilePicture: {
            type: String,

        },
        name: {
            type: String,

        },
        location: {
            type: String,
        },

        user_id: {
            type: String,
        },
        description: {
            type: String,
        },

    },

    { timestamps: true }
);


export default mongoose.model("ClientProfile", schema);