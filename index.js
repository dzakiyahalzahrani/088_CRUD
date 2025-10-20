const express = require('express');
let mysql = require('mysql2');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const db mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pafnadcasl',
    database: 'mahasiswa',
    port: 3308
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:' + err.stack);
        return;
    }
    console.log('Connection Sucsessfully!');
});

app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) {
            console.error('Error executing query:0' + err.stack);
            res.status(500).send('Error Fetching users');
            return;
        }
        res.json(results);
    })
})







