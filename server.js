const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const User = require('./models/User')



const PORT = 3001;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.post('/post', (req,res)=>{
//   const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       thoughts:[],
//       friends:[]
//     })
//     newUser.save();
//     if (newUser) {
//       res.status(201).json(newUser)
//     } else {
//       res.status(500).json({error: 'try again bozo'})
//     }
// })

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server forrunning on port ${PORT}!`);
  });
});
