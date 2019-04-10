import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        pUser_id: {
            type: String,
            required: true,

        },
        project_id: {
            type: String,
            required: true,

        },
        photographer_id: {
            type: String,
            required: true,

        },
    },

    { timestamps: true }
);






export default mongoose.model("Project_Proposal", schema);