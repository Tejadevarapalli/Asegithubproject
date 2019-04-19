var express = require('express');
var _router = express.Router();
var multer = require('multer');
var path = require('path');
var fs=require('fs');
var file= require('file-system')
const mongoose = require('mongoose');

var store = multer.diskStorage({
    destination: function(req,file,cb){
       // cb(null,'./uploads');
        console.log('filename');
        cb(null,path.resolve(__dirname, './uploads'));
        console.log('multer next Teja:');
        console.log(__dirname);
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});






var upload = multer({storage:store}).single('file');

_router.post('/upload',function(req,res,next){
    console.log(req.body);
    upload(req,res,function(err){
        console.log('checkpoint2');
        if(err){
            return res.status(501).json({error:err});
        }
       // console.log( upload)
        //do all database record saving activity
        console.log('filename new',req.file.filename);
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    });
});


_router.post('/download', function(req,res,next){
    filepath = path.join(__dirname,'./uploads') +'/'+ req.body.filename;
    res.sendFile(filepath);
});

module.exports = _router;
