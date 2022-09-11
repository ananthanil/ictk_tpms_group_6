const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected package')
}).catch((err)=>{
    console.log('connection failed',err.message)
});
const Schema = mongoose.Schema;

var tpackage = new Schema({
    PtrainerName : String,
    PtrainerCategory : String,
    PtrainerActivity : String,
    PHourAmount : Number,
    pActivityAmount : Number,
    packageStatus : Number
});

var PackageDetails = mongoose.model('package', tpackage); 
module.exports = PackageDetails;