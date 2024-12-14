const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'docmeet'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/appointments', (req, res) => {
    const sql = 'SELECT * FROM appoinment';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/page', (req, res) => {
    res.render('booking');
});
app.get('/page2', (req, res) => {
    res.render('booking2');
});
app.get('/page3', (req, res) => {
    res.render('booking3');
});
app.get('/appoinment', (req, res) => {
    res.render('list');
});

app.get('/docmeet', (req, res) => {
    res.render('index');
});
 
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contactus', (req, res) => {
    res.render('contactus');
});

app.get('/doctors', (req, res) => {
    res.render('doctors');
});

app.post('/book-appointment', (req, res) => {
    const { doctorName, selectedDate, selectedTime } = req.body;
    const sql = 'INSERT INTO appoinment (name, dd, time) VALUES (?, ?, ?)';
    db.query(sql, [doctorName, selectedDate, selectedTime], (err, result) => {
        if (err) throw err;
        console.log('Appointment booked:', result);
        // res.send('Appointment successfully booked!');
        res.redirect('appoinment')
        
    });
});

app.post('/cancel-appointment', (req, res) => {
    const { appointment_id } = req.body;
    const sql = 'DELETE FROM appoinment WHERE appoinmentid = ?';
    db.query(sql, [appointment_id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            // res.send('Appointment successfully canceled!');
            res.redirect('appoinment')
        } else {
            res.status(404).send('Appointment not found!');
        }
    });
});


const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


module.exports = app;
