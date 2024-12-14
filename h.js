// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mysql = require('mysql');

// // const app = express();
// // app.use(bodyParser.urlencoded({ extended: true }));

// // // Connect to MySQL
// // const db = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '123',
// //     database: 'docmeet'
// // });

// // db.connect(err => {
// //     if (err) throw err;
// //     console.log('MySQL connected...');
// // });

// // // Serve static files (CSS, images)
// // app.use(express.static('public'));

// // // Set EJS as the view engine
// // app.set('view engine', 'ejs');

// // // Render the appointment page
// // app.get('/page', (req, res) => {
// //     res.render('booking'); // Render the EJS file
// // });

// // // Handle form submission
// // app.post('/book-appointment', (req, res) => {
// //     const { doctorName,selectedDate, selectedTime } = req.body;

// //     // Save the data in MySQL
// //     const sql = 'INSERT INTO appoinment (name,dd, time) VALUES (?, ?,?)';
// //     db.query(sql, [doctorName,selectedDate, selectedTime], (err, result) => {
// //         if (err) throw err;
// //         console.log('Appointment booked:', result);
// //         res.send('Appointment successfully booked!');
// //     });
// // });

// // const PORT = 3001;
// // app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// // module.exports=app


// // ------------------------------------------------------------------------------------------------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Connect to MySQL
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123',
//     database: 'docmeet'
// });

// db.connect(err => {
//     if (err) throw err;
//     console.log('MySQL connected...');
// });

// // Serve static files (CSS, images)
// app.use(express.static('public'));

// // Set EJS as the view engine
// app.set('view engine', 'ejs');

// // Get all appointments
// app.get('/appointments', (req, res) => {
//     const sql = 'SELECT * FROM appoinment';
//     db.query(sql, (err, results) => {
//         if (err) throw err;
//         res.json(results);
//     });
// });

// // Render the appointment page
// app.get('/page', (req, res) => {
//     res.render('booking'); // Render the EJS file
// });
// app.get('/appoinment', (req, res) => {
//     res.render('list'); // Render the EJS file
// });
// app.get('/docmeet', (req, res) => {
//     res.render('index'); // Render the EJS file
// });
// app.get('/about', (req, res) => {
//     res.render('about'); // Render the EJS file
// });
// app.get('/contactus', (req, res) => {
//     res.render('contactus'); // Render the EJS file
// });
// app.get('/doctors', (req, res) => {
//     res.render('doctors'); // Render the EJS file
// });

// // Book an appointment
// app.post('/book-appointment', (req, res) => {
//     const { doctorName, selectedDate, selectedTime } = req.body;

//     const sql = 'INSERT INTO appoinment (name, dd, time) VALUES (?, ?, ?)';
//     db.query(sql, [doctorName, selectedDate, selectedTime], (err, result) => {
//         if (err) throw err;
//         console.log('Appointment booked:', result);
//         res.send('Appointment successfully booked!');
//     });
// });

// // Cancel an appointment
// app.post('/cancel-appointment', (req, res) => {
//     const { appointment_id } = req.body;

//     const sql = 'DELETE FROM appoinment WHERE appoinmentid = ?';
//     db.query(sql, [appointment_id], (err, result) => {
//         if (err) throw err;
//         if (result.affectedRows > 0) {
//             res.send('Appointment successfully canceled!');
//          } else {
//             res.status(404).send('Appointment not found!');
//         }
//     });
// });

// const PORT = 3001;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// module.exports = app;
