import express from "express";
import ClientProfile from "../models/ClientProfile";
import PostProject from '../models/PostProject';
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

router.post("/", (req, res) => {
    const name = req.body.name;
    const user_id = req.body.user_id;
    const description = req.body.description;
    const location = req.body.location;



    ClientProfile.updateOne(
        { user_id: user_id },
        { $set: { name: name,description:description , location:location } }
    ).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));

    //
    // const hello='http://localhost:8080/choose.png';
    // PhotographerProfile.updateOne(
    //     { user_id: user_id },
    //     { $push: { gallery: hello} }  //here is an error
    // ).exec()
    //     .then(doc => {
    //         console.log(doc);
    //     })
    //     .catch(err => console.log(err));




});

router.get("/:user_id",(req,res,next) => {

    const user_id = req.params.user_id;
    ClientProfile.find({ user_id: user_id}).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));

});


router.post("/upload/:user_id", upload.single('image'), (req, res) => {

    const user_id = req.params.user_id;


    ClientProfile.updateOne(
        { user_id: user_id },
        { $set: { profilePicture : req.file.path } }
    ).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));




});


// to recieve photographer's profile and show it to user

router.get("/recieveProfile/:user_id",(req,res,next) => {

    const user_id = req.params.user_id;

    PhotographerProfile.find({ user_id : user_id }).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));


});

router.get("/getProfile/:project_id",(req,res,next) => {

    const project_id = req.params.project_id;
    // console.log(user_id);


    PostProject.find({ _id : project_id }).exec()
        .then(doc => {
           const  email= doc[0].email;
            // console.log(email);

                ClientProfile.find({ user_id : "jj@namal.edu.pk" }).exec()
                .then(doc => {
                    // console.log(doc[0].profilePicture );
                    res.status(200).json(doc)
                })
                .catch(err => console.log(err));




        })
        .catch(err => console.log(err));





});









export default router;
