import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true,

        },
        city: {
            type: String,
            required: true,

        },
        description: {
            type: String,
            required: true,

        },
        category: {
            type: String,
            required: true,

        },
        budget: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            required: true,

        },

        state: {
            type: Boolean,
            required: true,

        },
        photographer_id : { type : Array , "default" : [] },
        date: {
            type: String,

        },
        time: {
            type: String
        },
        final_Photographer:{
            type: String
        },
        uploadedProject:{
            type: String
        },
        submit: {
            type: Boolean,
            required: false,

        },
        finalSubmit:{
            type: Boolean,
            required : false
        },
        rating:{
            type: Boolean,
            required : false
        },



    },

    { timestamps: true }
);






export default mongoose.model("PostProject", schema);