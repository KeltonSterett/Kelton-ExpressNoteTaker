// importing express and routes for the server
const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
// creating an express server
const app = express();
// setting the port
const PORT = process.env.PORT || 3001;
// setting up the express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// setting up the express app to serve static files
app.use(express.static("public"));
// setting up the express app to use the routes
app.use(apiRoutes);
app.use(htmlRoutes);
// starting the server
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});