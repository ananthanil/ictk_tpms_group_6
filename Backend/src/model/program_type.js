const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected programtpe')
}).catch((err)=>{
    console.log('connection failed',err.message)
});
// mongoose.connect('mongodb://localhost:27017/Tmpsystem')
const Schema = mongoose.Schema;

var NewProgramSchema = new Schema({
    programtype : String,
    studentsNum  :Number ,
    date : Date,
    statusProgram : Number
    });

var program_data = mongoose.model('programdetails',NewProgramSchema ); 

module.exports = program_data;
