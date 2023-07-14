import express from 'express'
import mysql from 'mysql'
// const mysql = require('mysql');
// const cors = require('cors');
import cors from 'cors';
const app = express()


app.use(cors())
app.use(express.json())



const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "audiophile"
})

app.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
        console.log('Connected to MySQL database');
});

// get all products from products table
app.get('/homeproducts', (req, res) => {
const query = 'SELECT * FROM home_products';

db.query(query, (err, results) => {
    if (err) {
    console.error('Error fetching products:', err);
    // return res.status(500).json({ error: 'Failed to fetch products' });
    }

    return res.json(results);
});
});

// get headphones products
app.get('/getheadphones', (req, res) => {
const query = 'SELECT * FROM products WHERE categories = ?';

let categories = 'headphones';

db.query(query, [categories], (err, results) => {
    if (err) {
    console.error('Error fetching products:', err);
    // return res.status(500).json({ error: 'Failed to fetch products' });
    }

    return res.json(results);
});
});

// get speakers products
app.get('/getspeakers', (req, res) => {
const query = 'SELECT * FROM products WHERE categories = ?';

let categories = 'speakers';

db.query(query, [categories], (err, results) => {
    if (err) {
    console.error('Error fetching products:', err);
    }

    return res.json(results);
});
});

// get earphones products
app.get('/getearphones', (req, res) => {
const query = 'SELECT * FROM products WHERE categories = ?';

let categories = 'earphones';

db.query(query, [categories], (err, results) => {
    if (err) {
    console.error('Error fetching products:', err);
    }

    return res.json(results);
});
});

// get all products based on categories
app.get('/productcategory/:category', (req, res) => {

    let category = req.params.category;

    if(category.length > 11) {
        return;
    }

    const query = 'SELECT * FROM products WHERE categories = ?';

    db.query(query, [category], (err, results) => {
        if (err) {
        console.error('Error fetching products:', err);
        // return res.status(500).json({ error: 'Failed to fetch products' });
        }

        return res.json(results);
    });
});

// get specific product based on id
app.get('/product/:id', (req, res) => {

    const productID = parseInt(req.params.id, 10)

    if(isNaN(productID)) {
        return res.status(404).send('Invalid product ID');
    }

    console.log(productID);

    // const query = "SELECT * FROM products WHERE id = ? LIMIT 1";
    const query = "SELECT * FROM audiophile_products WHERE id = ? LIMIT 1";

    db.query(query, [productID], (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
        }
        return res.json(results);
    });

})

app.get('/productSuggestion/:id', (req, res) => {
    const productSuggestionID = parseInt(req.params.id, 10)

    if(isNaN(productSuggestionID)) {
        return res.status(404).send('Invalid product ID');
    }

    // SELECT * FROM audiophile_products WHERE id <> 2 ORDER BY RAND() LIMIT 3;
    const query = "SELECT * FROM audiophile_products WHERE id <> ? ORDER BY RAND() LIMIT 3"

    db.query(query, [productSuggestionID], (err, results) => {
        if(err) {
            console.error('Error fetching products:', err)
        }
        return res.json(results);
    } )



})


app.listen(8800, () => {
    console.log('backend connected')
})