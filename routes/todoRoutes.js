const express = require('express');
const { ObjectId } = require('mongodb');
const todo = require('../models/todo');
const router = express.Router();
const TodoModel = require('../models/todo');

// Create a new data entry
router.post('/',async (req, res) => {
  console.log("post request",req.body);
  console.log("req body",req.body);
  const myData = new TodoModel({
    description: req.body.description,
    status: req.body.status | "incomplete"
  });
  try{
    console.log("mydata",myData);
    myData.save().then(result=>{
      console.log("result",result);
      return res.json({message : "succesfully added",result})
    })
    
  } catch(e){
    return res.json({message : e});
  }
    
});

// Get all data entries
router.get('/', (req, res) => {
  console.log("get request");
  TodoModel.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});
//update
router.post('/edit' ,async (req,res)=>{
  console.log("update with id",req.body.id);
  await TodoModel.findByIdAndUpdate({_id :  req.body.id }, {description : req.body.description});
  console.log("data updated");
  return res.json({message : "updated data"});
  
})
//delete
router.delete('/delete/:id' ,async (req,res)=>{
  console.log("delete with id",req.params.id);
  await TodoModel.findByIdAndDelete(req.params.id);
    console.log("data deleted");
    return res.json({message : "todo deleted"});
})



module.exports = router;
