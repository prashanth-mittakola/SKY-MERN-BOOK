const express = require("express");
const router = express.Router();

const {getAllBooks,createBook,deleteBook,updateBook,getSingleBook} = require("../controllers/book")

// router.get("/",login)
// router.get("/",register)
router.get("/",getAllBooks)
router.get("/:_id",getSingleBook)
router.post("/",createBook)
router.delete("/:_id",deleteBook)
router.put("/:_id",updateBook)



module.exports = router;