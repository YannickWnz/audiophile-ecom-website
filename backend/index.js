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


app.listen(8800, () => {
    console.log('backend connected')
})