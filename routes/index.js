var express = require('express');
var router = express.Router();
var pool=require('./pool')

/* GET home page. */
router.get('/router', function(req, res, next) {
  res.render('booking', { title: 'Express' });
});
router.get('/booking', (req, res) => {
  res.render('booking', { selectedDate: '', selectedTime: '' });
});

router.post('/select-date', (req, res) => {
  const selectedDate = req.body.selected_date;
  res.render('booking', { selectedDate, selectedTime: '' });
});

router.post('/select-time', (req, res) => {
  const { selected_date, selected_time } = req.body;
  res.render('booking', { selectedDate: selected_date, selectedTime: selected_time });
});
 module.exports = router;
