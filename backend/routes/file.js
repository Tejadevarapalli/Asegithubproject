var express = require('express');
var _router = express.Router();
var multer = require('multer');
var path = require('path');
const mongoose = require('mongoose');

var store = multer.diskStorage({
    destination : function(req,file,cb){
       // cb(null, './uploads');
        cb(null,path.resolve(__dirname, './uploads'));
        console.log(cb);
        console.log(__dirname);
    },
    filename:function(req,file,cb){
        console.log(file);
        cb(null, Date.now()+'.'+file.originalname);
    }
});


var upload = multer({storage:store}).single('file');

_router.post('/upload',function(req,res,next){
    upload(req,res,function(err){
        if(err){
            console.log(upload);
            return res.status(501).json({error:err});
        }
       // console.log( upload)
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    });
});


_router.post('/download', function(req,res,next){
    filepath = path.join(__dirname,'./uploads') +'/'+ req.body.filename;
    res.sendFile(filepath);
});

module.exports = _router;
