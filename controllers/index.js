var express = require('express');
var router  = express.Router();

router.use("/dashboard", require("./dashboard"));

router.get("/", (req, res, next) => {
    res.redirect("/dashboard");   
});

module.exports = router;