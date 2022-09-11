const express = require('express');
const signup = require('../model/signup');
const signupRouter = express.Router();
const jwt = require('jsonwebtoken');

function verifyToken(req,res,next)
{
  if(!req.headers.authorization)
    {
      return res.status(401).send('Unauthorized request')
    }
  let token=req.headers.authorization.split('')[1]
  if(token=='null')
  {
    return res.status(401).send('Unauthorised request')
  }
  let payload=jwt.verify(token,'secretkey')
  console.log(payload)
  if(!payload)
  {
    return res.status(401).send('Unauthorized request')
  }
  req.userId=payload.subject
  next()
}

signupRouter.post('/trainersignup',function(req,res){
    console.log(req.body);
    var ttype = {       
        Ufirstname : req.body.trainer.Ufirstname,
    Ulastname : req.body.trainer.Ulastname,
    Uemail :req.body.trainer.Uemail,
    Umobile : req.body.trainer.Umobile,
    Upassword : req.body.trainer.Upassword,
    Urole : req.body.trainer.Urole,
    Ustatus : req.body.trainer.Ustatus
  
      }       
   var ttype = new signup(ttype);
   ttype.save();
  });

  signupRouter.post('/login',function(req,res){
    let userEmail = req.body.logtrainer.Uemail;
    let userPassword = req.body.logtrainer.Upassword;
    signup.find({$and: [{Uemail: userEmail}, {Upassword: userPassword}]})
      .then((data)=> {
        console.log(data);
        res.send(data)
      }).catch((data)=> {
        let payload={subject:userEmail+userPassword}
        let token=jwt.sign(payload,'secretkey')
        data.send({token})
      });
  });

module.exports = signupRouter;