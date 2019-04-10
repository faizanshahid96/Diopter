import express from "express";


const router = express.Router();

router.post("/", (req, res) => {
  const name = req.body.name;
  console.log(name);

  res.status(400).json({ errors: { global: name } });



});
export default router;
