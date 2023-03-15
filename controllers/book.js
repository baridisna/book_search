import request from "request"
import pool from "../models/db.js"

export const Home = (req, res) => {
    res.get('index.ejs')
}

export const Book = (req, res) => {
    const q = req.query.q
    request(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=10&startIndex=0`, {json: true}, (err, response, body) => {
        if (err) { return console.log(err); }
        res.render('books.ejs', { books: body.items, q: q})
    })
}

export const WishlistPage = (req, res) => {
  pool.query('SELECT * FROM wishlist ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.render('wishlist.ejs', {books: results.rows })
  })
}


// Wishlists
export const CreateWishlist = (req, res) => {
    const { book_id, title, authors, average_rating, thumbnail } = req.body
    pool.query(`SELECT * FROM wishlist WHERE book_id = '${book_id}'`, (err, row) => {
      if(err) {
        throw err
      } else {
        if (row && row.rows.length) {
          res.status(400).json('Buku sudah ada di wishlist')
        } else {
          pool.query(
            `INSERT INTO wishlist (book_id, title, authors, average_rating, thumbnail) values
            ($1, $2, $3, $4, $5) RETURNING *`, [book_id, title, authors, average_rating, thumbnail], (error, results) => {
              if (error) {
                throw error
              }
              res.status(200).json(results.rows)
            }
          )
        }
      }
    })
  }


export const GetWishlist = (req, res) => {
    pool.query('SELECT * FROM wishlist ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }