const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected activity type')
}).catch((err)=>{
    console.log('connection failed',err.message)
});
// mongoose.connect('mongodb://localhost:27017/Tmpsystem')
const Schema = mongoose.Schema;

var NewactivitySchema = new Schema({
    activityType : String,
    statusactivityType : Number
});

var activity_Type = mongoose.model('activityType', NewactivitySchema); 

module.exports = activity_Type;
