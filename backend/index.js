const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/keeperDB", {
  useNewUrlParser: true,
});

// mongoose.connect("mongodb+srv://olena:1234@cluster0.h0n8umz.mongodb.net/keeperDB", {
//   useNewUrlParser: true,
// });

// Schemas
const notesSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model("Note", notesSchema);

app.get("/notes", async (req, res) => {
  const notes = await Note.find({});
  res.send(notes);
})

app.post("/notes", async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  await newNote.save();
});

app.delete("/notes", async function (req, res) {
    Note.deleteOne({_id: req.body._id})
    .then(function(){
      res.send("Deleted!");
    }).catch(function(error){
      console.log(error);
     })
});

app.listen(3001, function () {
  console.log("Server started on port 3001");
});
