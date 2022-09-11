const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected TimeSheet')
}).catch((err)=>{
    console.log('connection failed',err.message)
});
// mongoose.connect('mongodb://localhost:27017/Tmpsystem')
const Schema = mongoose.Schema;

var sheet = new Schema({
    tsTrainerName : String,
    tsDate : String,
    tsProgram : String,
    tsActivity : String,
    tsTraining_Mod: String,
    tsHour : Number,
    tsCandidateNumber: Number,
    tsStatus : Number
})    

var tsheet = mongoose.model('timesheet', sheet);

module.exports = tsheet;
