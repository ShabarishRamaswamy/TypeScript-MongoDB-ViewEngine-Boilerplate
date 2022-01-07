// Importing the required modules
import express from "express";
require("dotenv").config();
// require("./db/mongoose"); // Uncomment this line when .env is filled.

const app = express();
const PORT = process.env.PORT || 3000;

const routeRoute = require("./routes/exampleRoute");
// Changes with the preferred view engine.

// Setting up view engine. In this case EJS. And Static.
app.set("view engine", "ejs");
app.use(express.static("public"));

// Setting up Body Parsing && URL encoding.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use(routeRoute);

app.get("/", async (req, res) => {
    try {
        res.render("home");
    } catch (error) {
        console.log(error);
        res.send("Some error occured.");
    }
});

// Deploying the local server or on the Port of a Production Server
app.listen(PORT, () => {
    console.log(`The App has started on Port ${PORT}`);
});
