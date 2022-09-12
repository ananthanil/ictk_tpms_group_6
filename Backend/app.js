const express = require('express');
const cors = require('cors');
const path = require('path');
var bodyparser = require('body-parser');
const adminRoute = require('./src/router/adminRoute')
const signupRouter = require('./src/router/signupRouter')
const trainerRouter = require('./src/router/trainerRouter')


var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.static('./dist/frontend'));

app.use('/api/admin/',adminRoute);
app.use('/api/trainer/', trainerRouter);
app.use('/api/user/', signupRouter);

app.get('/*',function(req, res){
  res.sendFile(path.join(__dirname, './dist/frontend/index.html'));
});

var PORT = process.env.PORT || 3666

app.listen(PORT,function(){
    console.log(`listening to port ${PORT}`);
  });