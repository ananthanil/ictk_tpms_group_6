const express = require('express');
const timesheet = require('../model/timesheet')
const activityType=require('../model/activityType');
const trMode = require('../model/trainer_mode');
const program_type= require('../model/program_type');
const tsheet = require('../model/timesheet');

const trainerRouter = express.Router();


//  inserting timesheet

trainerRouter.post('/inserttimesheet',function(req,res){                  
     console.log(req.body);
     var ts = {
          tsTrainerName : req.body.timesheet.tsTrainerName,       
          tsDate : req.body.timesheet.tsDate,
          tsProgram: req.body.timesheet.tsProgram,
          tsActivity: req.body.timesheet.tsActivity,
          tsTraining_Mod : req.body.timesheet.tsTraining_Mod,
          tsHour : req.body.timesheet.tsHour,
          tsCandidateNumber : req.body.timesheet.tsCandidateNumber,
          tsStatus : req.body.timesheet.tsStatus
       }       
    var ts = new tsheet(ts);
    ts.save();
   }); 

// view timesheet
trainerRouter.get('/time_sheetview',function(req,res){
     tsheet.find({"tsStatus":1})
     .then(function(timesheet){
          res.send(timesheet);
     });
   });



//  selection of program name  and date
trainerRouter.get('/programview',function(req,res){
     program_type.find({"statusProgram":1})
    .then(function(programdetail){
          res.send(programdetail);
      });
      });



//  selection of activitytype
trainerRouter.get('/activityTypeview',function(req,res){
     activityType.find({"statusactivityType":1})
    .then(function(activityType){
          res.send(activityType);
      });
      });

      
//  selection of TrainerMode
trainerRouter.get('/TrainerModeview',function(req,res){
     trMode.find()
    .then(function(trainermode){
         res.send(trainermode);
    });
   });
  
module.exports = trainerRouter;