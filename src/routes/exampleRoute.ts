import express from "express";
var router = express.Router();

router.get("/route", (req, res) => {
    res.render("home");
});

module.exports = router;
