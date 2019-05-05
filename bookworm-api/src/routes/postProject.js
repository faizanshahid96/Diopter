import express from "express";
import PostProject from "../models/PostProject";
import Proposal from "../models/Proposals";
import PhotographerProfile from "../models/PhotographerProfile"
const  multer = require('multer');

const storage = multer .diskStorage({
   destination : function (req, file, cb){
        cb(null,'./upload/');
   },
   filename : function (req,file,cb){
        cb(null, file.originalname);
   }
});



const upload = multer({storage:storage});

const router = express.Router();




// router.post("/info", (req, res) => {
//     const photographer = new PhotographerProfile({
//         name: req.body.name,
//         description: req.body.description
//     });
//
//     photographer
//         .save()
//         .then(result => {
//             console.log(result);
//             res.status(201).json(result);
//         })
//         .catch(err => console.log(err));
//
// });



router.post("/", (req, res) => {


    const postProject = new PostProject({
        projectName: req.body.projectName,
        city: req.body.city,
        description: req.body.description,
        category: req.body.category,
        budget: req.body.budget,
        email: req.body.email,
        state: false,
        date:req.body.date,
        finalSubmit: false,
        rating : false
    });


    // PostProject.find({ photographer_id:  { $ne : "1234567890"}}).exec()
    //     .then(doc => {
    //         console.log(doc);
    //         res.status(200).json(doc)
    //     })
    //     .catch(err => console.log(err));



    //this is some practice stuff
    // postProject.photographer_id.push("hello");
    // PostProject.findOneAndUpdate({"_id":"5caa3bac9be05112ac09b2c7"},{$push: {"photographer_id":"hello"}});

    //
    // //this is the code to push an element in an Array with conditiom
    // PostProject.update(
    //     { _id: '5caa3cf5d3406312b4266c17' },
    //     { $push: { photographer_id: "shah" } }
    // ).exec()
    //     .then(doc => {
    //         console.log(doc);
    //         res.status(200).json(doc)
    //     })
    //     .catch(err => console.log(err));


    // this is the original code for this function
    console.log(req.body.email);
    postProject.save().then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));

});






router.get("/:user_id",(req,res,next) => {

    const photographer_id= req.params.user_id;

    PostProject.find({ photographer_id:  { $ne : photographer_id}}).exec()
        .then(doc => {
            // console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));

});


router.get("/email/:id",(req,res,next) => { //{email:'shahreyar166@gmail.com'}

    const email = req.params.id;
    console.log(email);
    PostProject.find ({
        $and : [
            {email:email},
            {state:false}
        ]
    }, {photographer_id: 0})
        .exec()
        .then(doc => {
            // console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log('err'));

});

router.get("/:id",(req,res,next) => {


    PostProject.find ({_id:req.params.id})
        .exec()
        .then(doc => {
            res.status(200).json(doc[0].email)
        })
        .catch(err => console.log(err));

});
//to get the projects that a photographer sent proposals to



router.get("/getProject/:id",(req,res,next) => { //{email:'shahreyar166@gmail.com'}

    console.log( req.params.id);
    PostProject.find ({
        $and : [
            {photographer_id : req.params.id},
            {state:false}
        ]
    })
        .exec()
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => console.log('err'));

});

router.get("/hello/:pUser",(req,res,next) => {

    console.log('hello');

    Proposal.find ()
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log('err'));
});

//this code is used to upload final project to server

router.post("/uploadProject/:project_id", upload.single('image'), (req, res) => {

    const project_id = req.params.project_id;


    console.log("hello");


    PostProject.updateOne(
        { _id: project_id },
        { $set: { uploadedProject : req.file.path , submit : true} }
    ).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));




});









//to get the final project uploaded by photographer




router.get("/getSubmission/:id",(req,res,next) => {


    console.log('hello');
        PostProject.find ({_id:req.params.id})
            .exec()
            .then(doc => {
                console.log(doc);
                res.status(200).json(doc)
            })
            .catch(err => console.log(err));

});



//this method is to get all the projects that are completed















export default router;
