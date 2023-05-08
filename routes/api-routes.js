const router = require("express").Router();
const fs = require("fs");


// define the get request for the notes page
router.get("api/notes", async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json (dbJson);
});

// define the post request for the notes page
router.post("api/notes", (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        
    };
 dbJson.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify (dbJson));
    res.json(dbJson);
}); 

module.exports = router;