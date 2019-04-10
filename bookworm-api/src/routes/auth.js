import express from "express";
import User from "../models/User";
import PostProject from "../models/PostProject";

const router = express.Router();

router.post("/", (req, res) => {
  const { credentials } = req.body;
  User.findOne({ email: credentials.email }).then(user => {
    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: user.toAuthJSON() });
    } else {
      console.log("hello jee")
      res.status(400).json({ errors: { global: "Invalid Credentials" } });
    }
  });
});



export default router;
// && user.isValidPassword(credentials.password)
