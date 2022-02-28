const express = require("express");
const router = express.Router();


function welcome (req,res) {
res.send("welcome")
}
// router.get("/",login)
// router.get("/",register)
router.get("/",welcome)

module.exports = router;