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
        state: false
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






router.get("/",(req,res,next) => {

    PostProject.find({ photographer_id:  { $ne : "faizan166@gmail.com"}}).exec()
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
export default router;
