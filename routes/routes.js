import express from "express"
import {Home, Book} from "../controllers/book.js"

const router = express.Router();

router.get('/', Book)
router.get('/book', Home)

export default router;