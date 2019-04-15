var express = require('express');
var router = express.Router();
var modal = require('../routes/models/modalupload.js');
var signup = require('../routes/models/signup.js');
var mongoose = require('mongoose');


 mongoose.connect('mongodb+srv://dteja:Teja.144@cluster0-bbmeb.mongodb.net/test?retryWrites=true')
     .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

// mongoose.connect('mongodb+srv://gopichand:C%2D123456%2D1995@cluster0-aryuf.mongodb.net/test?retryWrites=true')
//     .then(() => console.log('connection successful'))
//     .catch((err) => console.error(err));

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
    signup.find({EmailID: req.body.EmailID}, function (err, data) {
        console.log(data.length);
        if (data.length <= 0) {
            if (req.body.EmailID !== null && req.body.Password !== null) {
                signup.create(req.body, function (err, post) {
                    console.log(post);
                    if (err) return next(err);
                    res.json(post);
                });
            } else {
                res.json("Please fill the details");
            }
        } else {
            res.json("User exists");
        }
    });
});



 router.post('/mymodelsDetails',function (req ,res){
     console.log(req.body.id);
     modal.find({User: req.body.id},function(err,data){
         console.log("user specific data"+data);
         res.json(data);
     });
});


router.get('/modelsDetails',function (req ,res){
    modal.find({},function(err,data){
        console.log("all the data"+data);
        res.json(data);
    });
});


router.post('/viewDetails',function(req,res){
    console.log(req.body.title);
    modal.find({Projecttitle: req.body.title},function(err,data){
      console.log(data);
      res.json(data);
    })
})



router.post('/signinDetails' ,function(req,res,next) {
    console.log(req.body);
    signup.find({'EmailID': req.body.EmailID}, function (err, user) {
        console.log(user);
        if (user.length <= 0){
            res.json('no user available register to login');
        }else{
            if(user[0]) {
                if (user[0].Password === req.body.Password) {

                    res.json("Success");
                }else {
                    res.json("incorrect password")
                }
            }
        }
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
