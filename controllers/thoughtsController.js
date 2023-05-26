const { Types } = require('mongoose');
const {Thoughts, User} = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thoughts.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(thought)
      )
      .catch((err) => console.log(err));
  },
  // create a new user
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          {username:req.body.username},
          {$addToSet:{thoughts:thought._id}},
          {new:true}
        )
      })
      .then((thought) =>{
        res.status(201).json(thought)
      })
      .catch((err) => res.status(500).json(err));
  },

  updateThought(req,res){
    Thoughts.findOneAndUpdate({ _id: req.params.thoughtId },req.body, {new:true})
    .then(thought =>{
      res.status(201).json(thought);
    })
    .catch(err =>{
      console.log(err);
    })
  } ,
  
  deleteThought(req,res){
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId})
    .then(results =>{
      res.status(201).json(results)
    })
    .catch(err =>{
      console.log(err);
    })
  } 


};

