const mongoose = require('mongoose');

var modaluploadSchema = new mongoose.Schema({
    Projecttitle: String,
    ProjectDescription: String,
    GithubURL: String,});
const homeedata = mongoose.model('modalupload', modaluploadSchema);
module.exports=homeedata;


var signupSchema = new mongoose.Schema({
    Username: String,
    EmailID: String,
    Password: String,});
const signupdata = mongoose.model('signupDetails', signupSchema);
module.exports=signupdata;