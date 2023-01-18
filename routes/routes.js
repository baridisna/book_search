import express from "express"
import {Home, Book, WishlistPage, CreateWishlist, GetWishlist} from "../controllers/book.js"

const router = express.Router();

router.get('/', Book)
router.get('/book', Book)
router.get('/wishlist', WishlistPage)

router.post('/api/wishlists/', CreateWishlist)
router.get('/api/wishlists/', GetWishlist)

export default router;