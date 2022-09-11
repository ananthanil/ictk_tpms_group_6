const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected Trainer Mode')
}).catch((err)=>{
    console.log('connection failed',err.message)
});
const Schema = mongoose.Schema;

var TrnMode = new Schema({
    trainingMode: String,
    statusTrainermode : Number
});

var trMode = mongoose.model('trainermode', TrnMode); 

module.exports = trMode;

