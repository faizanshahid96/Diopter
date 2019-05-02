import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        Complain: {
            type: String,

        },
        client_id: {
            type: String,

        },
        photographer_id: {
            type: String,
        },

        project_id: {
            type: String,
        },
    },

    { timestamps: true }
);


export default mongoose.model("CustomerCare", schema);