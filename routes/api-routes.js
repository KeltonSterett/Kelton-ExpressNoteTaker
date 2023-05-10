const router = require("express").Router();
const fs = require("fs");


// define the get request for the notes page
router.get("/api/notes", async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json (dbJson);
});

// define the post request for the notes page
router.post("/api/notes", (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newNote = {
        title: req.body.title,
        text: req.body.text, 
        id: dbJson.length + 1,
    };
    console.log(newNote);
 dbJson.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
}); 

router.delete("/api/notes/:id", (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const noteId = req.params.id;
    const newDbJson = dbJson.filter((note) => note.id != noteId);
    fs.writeFileSync("db/db.json", JSON.stringify(newDbJson));
    res.json(newDbJson);
});



module.exports = router;