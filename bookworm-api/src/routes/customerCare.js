import express from "express";
import CustomerCare from "../models/CustomerCare";
import PostProject from "../models/PostProject";


const router = express.Router();

router.post("/", (req, res) => {
    const name = req.body.complain;


    console.log(name);
    console.log(req.body.client_id);
    console.log(req.body.project_id);


    const customerCare = new CustomerCare({
        Complain: req.body.complain,
        client_id: req.body.client_id,
        project_id: req.body.project_id,
    });

    customerCare.save().then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));



    res.status(400).json({ errors: { global: name } });



});



router.get("/:location/:expertise/:email",(req,res,next) => { //{email:'shahreyar166@gmail.com'}

    // const email = req.params.id;

    const location= req.params.location;
    const expertise= req.params.expertise;
    const email= req.params.email;



    if (location === 'none'){
        console.log('location is none');


        PostProject.find ({$and : [
                {category:expertise},
                {photographer_id:  { $ne : email}}
            ]})
            .exec()
            .then(doc => {
                console.log(doc);
                res.status(200).json(doc)
            })
            .catch(err => console.log(err));

    }

    if (expertise === 'none'){
        console.log('expertise is none');


        PostProject.find ({$and : [
                {city:location},
                {photographer_id:  { $ne : email}}
            ]})
            .exec()
            .then(doc => {
                console.log(doc);
                res.status(200).json(doc)
            })
            .catch(err => console.log(err));

    }


    PostProject.find ({$and : [
            {city:location},
            {category:expertise},
            {photographer_id:  { $ne : email}}
        ]})
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => console.log(err));





    // PostProject.find ({
    //     $and : [
    //         {email:"lol@lol.com"},
    //         {state:''}
    //     ]
    // })
    //     .exec()
    //     .then(doc => {
    //         // console.log(doc);
    //         res.status(200).json(doc)
    //     })
    //     .catch(err => console.log('err'));

});



export default router;
