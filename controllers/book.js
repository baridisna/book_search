import request from "request"

export const Home = (req, res) => {
    res.render('index.ejs')
}

export const Book = (req, res) => {
    const q = req.query.q
    console.log(q)
    request(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=5&startIndex=0`, {json: true}, (err, response, body) => {
        if (err) { return console.log(err); }
        res.render('books.ejs', { books: body.items, q: q})
    })
}