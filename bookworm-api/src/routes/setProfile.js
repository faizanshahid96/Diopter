import express from "express";
import PhotographerProfile from "../models/PhotographerProfile";
import PostProject from "../models/PostProject";
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
    const expert = req.body.expert;



PhotographerProfile.updateOne(
        { user_id: user_id },
        { $set: { name: name, expert:expert ,description:description , location:location } }
    ).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));


const hello='http://localhost:8080/choose.png';
    PhotographerProfile.updateOne(
        { user_id: user_id },
        { $push: { gallery: hello} }  //here is an error
    ).exec()
        .then(doc => {
            console.log(doc);
        })
        .catch(err => console.log(err));




});

router.get("/:user_id",(req,res,next) => {

    const user_id = req.params.user_id;
    PhotographerProfile.find({ user_id: user_id}).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));

});


router.post("/upload/:user_id", upload.single('image'), (req, res) => {

    const user_id = req.params.user_id;


    PhotographerProfile.updateOne(
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


//this function is to get email of photogrpher


router.get("/getPhotographerId/:project_id",(req,res,next) => {

    const project_id = req.params.project_id;

    console.log(project_id);

    PostProject.find({ _id : project_id }).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));


});

//this code is to set rating

router.post("/rating", (req, res) => {
    const photographerEmail = req.body.photographer;
    const rating = req.body.rating;
    const project_id = req.body.project_id;


    PhotographerProfile.update(
        { user_id: photographerEmail },
        { $push: { rating: rating } }
    ).exec()
        .then(doc => {

            PostProject.updateOne(
                { _id: project_id },
                { $set: { rating : true } }
            ).exec()
                .then(doc => {
                    console.log(doc);
                    res.status(200).json(doc)
                })
                .catch(err => console.log(err));



        })
        .catch(err => console.log(err));

});

//check rating


router.post("/checkRating/:project_id", (req, res) => {

    const project_id= req.params.project_id;

    PostProject.find({ _id : project_id }).exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));

    console.log('hello');


});


export default router;
