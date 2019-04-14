const mongoose = require('mongoose');

var modaluploadSchema = new mongoose.Schema({
    Projecttitle: String,
    ProjectDescription: String,
    GithubURL: String,});
const homeedata = mongoose.model('modalupload', modaluploadSchema);
module.exports=homeedata;


