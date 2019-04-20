import express from "express";
import path from "path";
import mangoose from "mongoose";
import bodyParser from "body-parser";
import Promise from "bluebird";
import auth from "./routes/auth";
import users from "./routes/users";
import practice from "./routes/practice";
import postProject from "./routes/postProject";
import projectsProposals from "./routes/projects_proposals"
import sendProposal from "./routes/sendProposal";
import SetProfile from "./routes/setProfile"

const app = express();

app.use(bodyParser.json());
mangoose.Promise = Promise;
mangoose.connect(
    "mongodb://localhost/photography", //change this (solution in tutorial no.3 time:18:00)
    { useMongoClient: true }
);

app.use(express.static('upload'));
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/practice",practice);
app.use("/api/postProject",postProject);
app.use("/api/sendProposal",sendProposal);
app.use("/api/projects_proposals",projectsProposals);
app.use("/api/setProfile", SetProfile);
app.post("/api/auth", (req, res) => {
  res.status(400).json({ errors: { global: "Invalid Credentials" } });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("running on localhost:8080"));