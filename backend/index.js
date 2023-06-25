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

// app.get('/', (req, res) => {
//     res.json('from backend')
// })

// app.get("/products", (req, res) => {

//     // const q = "SELECT * FROM products"
//     // db.query(q, (err, data) => {
//     //     if(err) return res.json(err)
//     //     return res.send(data)
//     // }) 

//     db.query('SELECT * FROM products', (err, data) => {
//         if(err) {
//             console.log(err)
//         } else {
//             res.send(data)
//         }
//     })

// })

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

app.get('/productcategory/:category', (req, res) => {

    let category = req.params.category;

    if(category.length > 11) {
        return;
    }


    // console.log(category)
    // return res.json(category)
    // return category;

    const query = 'SELECT * FROM products WHERE categories = ?';

    db.query(query, [category], (err, results) => {
        if (err) {
        console.error('Error fetching products:', err);
        // return res.status(500).json({ error: 'Failed to fetch products' });
        }

        return res.json(results);
    });
});

// app.post("/insert", (req, res) => {

//     const query = "INSERT INTO products ( name, description, features, boxItems, imagePath, price, categories) VALUES (?)"
//     const values = ['ZX9 Speaker', 'Upgrade your sound system', 'Connect via Bluetooth', '[{"itemName": "Speaker Unit", "itemQuantity": 2}]', '["assets/product-zx9-speaker/desktop/image-product.jpg"]', '233', 'speakers']

//     db.query(query, [values], (err, data) => {
//         if(err) return res.json(err)
//         return res.json('inserted successfully')
//     })

// })
// hey yooo

app.listen(8800, () => {
    console.log('backend connected')
})