// require express and path modules
const router = require("express").Router();
const path = require("path");

// route that sends 'index.html' as a response to the client (user)
router.get("/", (req, res) => {  
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });
// route that sends 'notes.html' as a response to the client (user)
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });