import express from "express";
import User from "../models/User";
import parseErrors from "../utils/parseErrors";
import PostProject from "../models/PostProject";
import SetProfile from "../models/PhotographerProfile";
import ClientProfile from '../models/ClientProfile';

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password, check } = req.body.user;

  const user = new User({ email : email});
  user.setPassword(password);

  if (check === 'yes'){
      user.phographer(true);
      const profile= new SetProfile({
          user_id: email,
          name : 'Name',
          description: 'Description',
          expert : 'category',
          location: 'Your city',
      });


      profile
          .save()
          .then()
          .catch();

  }
  if (check === 'no'){
      user.phographer(false);
      const profile= new ClientProfile({
          user_id: email,
          name : 'Name',
          description: 'Description',
          location: 'Your city',
      });


      profile
          .save()
          .then()
          .catch();

  }


  user
    .save()
      .then(userRecord => res.json({user: userRecord.toAuthJSON()}))

    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

router.post("/update", (req, res) => {

  const email=req.body.email;
  const value=req.body.value;

  console.log(email);
  console.log(value);


  User.updateOne(
        { email: email },
      { $set: { confirmed: true } }
  ).exec()
      .then(doc => {
        console.log(doc);
        res.status(200).json(doc)
      })
      .catch(err => console.log(err));
});


export default router;
