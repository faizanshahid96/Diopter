import express from "express";
import User from "../models/User";
import parseErrors from "../utils/parseErrors";
import PostProject from "../models/PostProject";

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password, check } = req.body.user;

  const user = new User({ email : email});
  user.setPassword(password);

  if (check === 'yes'){
      user.phographer(true);
  }
  if (check === 'no'){
      user.phographer(false);
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
