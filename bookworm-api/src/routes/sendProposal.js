import express from "express";
 import Proposal from "../models/Proposals";
 import mongoose from 'mongoose';
import PostProject from "../models/PostProject";

// const Proposal = require("../models/Proposals");

const router = express.Router();

router.post("/", (req, res) => {

   const photographer_id = req.body.user_id;
    const project_id = req.body.project_id;



    const propo= new Proposal({
        proposal : req.body.proposal,
        budget : req.body.budget,
        pUser_id:req.body.user_id,
        project_id:req.body.project_id,

    });


    propo.save().then(result => {

        console.log(result);
    })
        .catch(err => console.log(err));




    // //this is the code to push an element in an Array with conditiom
    PostProject.update(
        { _id: project_id },
        { $push: { photographer_id: photographer_id } }
    ).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));






    // console.log(proposal);
    // console.log(budget);

    // res.status(400).json({ errors: { global: proposal } });

});

router.get("/:id",(req,res,next) => {


    Proposal.find ({project_id:req.params.id})
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log('err'));

});

router.get("/",(req,res,next) => {

    // res.status(200).json(
    //     {
    //         message:"jani"
    //     }
    // );

    // var Person = mongoose.model('Proposal', schema);


    // Proposal.find({_id : '5c936785a9d15710e062ab5a'}, {_id : 0}, function (err, docs) {
    //     console.log(err);
    //     console.log(docs);
    //     res.status().send({data : docs});
    // });
    // {_id : '5c936785a9d15710e062ab5a'}
    Proposal.find ()
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log('err'));
    // res.status(200).json({
    //     message:"handdling get request"
    // })
});
export default router;
