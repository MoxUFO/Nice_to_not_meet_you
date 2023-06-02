const { Types } = require('mongoose');
const {Thoughts, User, Reactions} = require('../models');

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
    // User.findOneAndUpdate(
    //   {_id: thought._id},
    //   {$pull:{thought:req.params.thoughtId}},
    //   {new:true}
    // )
    Thoughts.findOneAndRemove({ _id: req.params.thoughtId})
    .then(thought =>{
      User.findOneAndUpdate(
        {thoughts : req.params.thoughtId},
        {$pull : {thoughts : req.params.thoughtId}},
        {new:true}
      )
      .then((thoughts)=>{
        res.status(200).json(thoughts)
      })
    })
    .catch(err =>{
      res.status(400).json({message: 'error'});
    })
  },
  // addReaction(req,res){
  //   Thoughts.findOneAndUpdate({ _id: req.params.thoughtId },
  //     {$addToSet:{reactions:{
  //       reactionBody: req.body.reactionBody,
  //       username: req.body.username,
  //       CreatedAt: new Date()
  //     }}},
  //     {new:true}
  //     )
  //   .then(thought =>{
  //     res.status(201).json(thought);
  //   })
  //   .catch(err =>{
  //     console.log(err);
  //   })
  // },
  addReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {$addToSet: { reactions: {
        reactionBody: req.body.reactionBody,
        username: req.body.username,
        createdAt: new Date()
      }}},
      {new: true}
    )
    .then((reaction) => res.json(reaction))
    .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req,res){
    Thoughts.updateOne(
      {_id: req.params.thoughtId},
      {$pull:{reactions: {_id: req.params.reactionsId}}},
      {new:true}
    )
    .then((results)=>{
      res.status(201).json(results)
    })
  }


};

