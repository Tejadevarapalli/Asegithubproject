var express = require('express');
var router = express.Router();
var modal = require('../routes/models/modalupload.js');
var signup = require('../routes/models/modalupload.js');
var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://dteja:Teja.144@cluster0-bbmeb.mongodb.net/test?retryWrites=true')
//     .then(() => console.log('connection successful'))
//     .catch((err) => console.error(err));

mongoose.connect('mongodb+srv://gopichand:C%2D123456%2D1995@cluster0-aryuf.mongodb.net/test?retryWrites=true')
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

router.post('/sendDetails', function (req, res, next) {
    console.log(req.body);
    modal.create(req.body, function (err, post) {
        console.log(post)
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/signupDetails', function (req, res, next) {
    console.log(req.body);
    signup.create(req.body, function (err, post) {
        console.log(post)
        if (err) return next(err);
        res.json(post);
    });
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('welcome to backend');
});


//
// router.post('/sendDetails',function(req,res,next) {
//
//     console.log('in senddetails',req.body);
//     let storeDetails = new homeedata(req.body);
//     storeDetails.save({}, (err, result)=> {
//         if(result) {
//             res.send('success');
//         }
//         else {
//             console.error(err);
//             res.send('user not saved');
//         }
//     })
// });

module.exports = router;