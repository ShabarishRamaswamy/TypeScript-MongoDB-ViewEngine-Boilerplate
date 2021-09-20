// Importing the required modules
import express from "express";
require("dotenv").config();
require("./db/mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const routeRoute = require("./routes/exampleRoute");
// Changes with the preferred view engine.
const exphbs = require("express-handlebars");

// Setting the template engine
app.engine(
    ".hbs",
    exphbs({
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");
app.use(express.static("res"));

// Routers
app.use(routeRoute);

app.get("/", async (req, res) => {
    try {
        res.render("home.hbs");
    } catch (error) {
        console.log(error);
        res.send("Some error occured.");
    }
});

// Deploying the local server or on the Port of a Production Server
app.listen(PORT, () => {
    console.log(`The App has started on Port ${PORT}`);
});
