import express from "express";
import Projects_Proposal from "../models/Project_Proposal";
import PostProject from "../models/PostProject";


const router = express.Router();

router.post("/", (req, res) => {

    const project_id= req.body.project_id;

    const projectProposal = new Projects_Proposal({

        project_id: req.body.project_id,
        pUser_id: req.body.photographer_id,
        photographer_id: req.body.client_id,
    });





    projectProposal.save();

    //this is the code to set the state of project to true
    PostProject.updateOne(
        { _id: project_id },
        { $set: { state: true } }
    ).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));




});



router.get("/:user_id",(req,res,next) => { //{email:'shahreyar166@gmail.com'}

    // const doccument =[];
    //this function gets all the on going projects for the currently logged in client where pUser_id is used client's id
    const user_id=req.params.user_id;
    // Projects_Proposal.find ({pUser_id: user_id})
    //     .exec()
    //     .then(doc => {
    //         const docc=doc;
    //         console.log(docc);
    //         res.status(200).json(doc)
    //     })
    //     .catch(err => console.log('err'));

    // this code will get all those projects that are on going for the currently logged in user
    PostProject.find ({
        $and : [
            {email:user_id},
            {state:true}
        ]
    }, {photographer_id: 0})
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log('err'));


});
export default router;