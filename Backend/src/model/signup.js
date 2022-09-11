const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected signup')
}).catch((err)=>{
    console.log('connection failed',err.message)
});
// mongoose.connect('mongodb://localhost:27017/Tmpsystem')
const Schema = mongoose.Schema;

var TainerSignup = new Schema({
    Ufirstname : String,
    Ulastname : String,
    Uemail : String,
    Umobile : Number,
    Upassword : String,
    Urole : String,
    Ustatus : Number
});

var signup = mongoose.model('signup', TainerSignup); 

module.exports = signup;
