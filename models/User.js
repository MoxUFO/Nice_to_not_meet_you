const { Schema, model } = require('mongoose');



const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },
      email: {
        type: String,
        unique: true,
        required:true,
        validate:{
          validator: function(v){
            return 
          }
        }
      },
      thoughts:[
        {
          type: Schema.Types.ObjectId,
          ref:'Thoughts'
        }
      ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {

    toJSON: {
      virtuals: true,
    },
    id: false
  }
);


userSchema.virtual('friendCount')
.get(function () {
    return ;
  })

const User = model('user', userSchema);

module.exports = User;
