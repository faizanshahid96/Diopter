import mongoose from "mongoose";

constructor()

const schema = new mongoose.Schema(
    {
        proposal: {
            type: String,
            required: true,

        },
        budget: {
            type: String,
            required: true,

        },

        pUser_id: {
            type: String,
            required: true,

        },
        project_id: {
            type: String,
            required: true,

        },

    },

    { timestamps: true }
);






export default mongoose.model("Proposal", schema);