const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
addUserfriends(req,res){
    User.findOne({ username: req.body.username },{new:true})
      .select('-__v')
      .then((user) => {
        return User.findByIdAndUpdate(
          {_id: req.params.userId},
          {$addToSet:{friends:user._id}},
          {new:true}
        )
      })
      .then((results)=>{
        res.status(201).json(results)
      })
      .catch((err) => res.status(500).json(err));
  } ,
  
  deleteUser(req,res){
    User.findOneAndDelete({ _id: req.params.userId})
    .then(results =>{
      res.status(201).json(results)
    })
    .catch(err =>{
      console.log(err);
    })
  },
 updateUser(req,res){
  User.findOneAndUpdate({ _id: req.params.userId }, req.body,{new:true})
  .then((result)=>{
    res.status(201).json(result)
  })
  },
    
  deleteUserFriend(req,res){
    User.updateOne(
      {_id: req.params.userId},
      {$pull:{friends: req.params.friendsId}},
      {new:true}
    )
    .then((results)=>{
      res.status(201).json(results)
    })
  } 


};
