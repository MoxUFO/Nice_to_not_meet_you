const userData = [
{
  username: 'Jeff Winger',
  email:"J.winger@email.com",
  thoughts:[],
  friends:[]
},
{
  username: 'Pierce Hawthorne',
  email:"J.winger@email.com",
  thoughts:[],
  friends:[]
},
{
  username: 'Annie Edison',
  email:"A.Edison@email.com",
  thoughts:[],
  friends:[]
},
{
  username: 'Sherly Bennet',
  email:"S.Bennet@email.com",
  thoughts:[],
  friends:[]
},
{
  username: 'Abed Ndir',
  email:"A.Ndir@email.com",
  thoughts:[],
  friends:[]
},
{
  username: 'Britta Perry',
  email:"B.Perry@email.com",
  thoughts:[],
  friends:[]
},
{
  username: 'Troy Barnes',
  email:"T.Barnes@email.com",
  thoughts:[],
  friends:[]
},
];

const thoughtsData = [
  {
    thoughtText:"For your information, I don’t have an ego. My Facebook photo is a landscape.",
    createdAt: new Date(),
    username:'Jeff Winger',
    reactions:[
      {
        reactionBody:"1",
        username:'Jeff Winger',
        createdAt: new Date(),
      }
    ]
  },
  {
    thoughtText:"Since When Do Human Beings Decide Which Dreams Are Worthwhile.We Have To Respect Each Other Enough To Let Each Other Want What We Want.",
    createdAt: new Date(),
    username:'Annie Edison',
    reactions:[]
  },
  {
    thoughtText:"You gain levels, and at a certain point you actually CAN eat a ghost.",
    createdAt: new Date(),
    username:'Pierce Hawthorne',
    reactions:[]
  },
  {
    thoughtText:"SOME flies are just too awesome for the wall.",
    createdAt: new Date(),
    username:'Abed Ndir',
    reactions:[]
  },
  {
    thoughtText:"The word he’s looking for is ‘sassy.’ He better pray he don’t find it.",
    createdAt: new Date(),
    username:'Sherly Bennet',
    reactions:[]
  },
  {
    thoughtText:" Called a complisult. Part compliment, part insult. I coined the term. See what I just did there? That was an explanabrag",
    createdAt: new Date(),
    username:'Britta Perry',
    reactions:[]
  },
  {
    thoughtText:"Sometimes I think I lost something really important to me, and it turns out i already ate it!",
    createdAt: new Date(),
    username:'Troy Barnes',
    reactions:[]
  }
];

const reactionData = [
  {
    reactionBody:"1",
    username:'Jeff Winger',
    createdAt: new Date(),
  },
  {
    reactionBody:"2",
    username:'Annie Edison',
    createdAt: new Date(),
  },
  {
    reactionBody:"3",
    username:'Pierce Hawthorne',
    createdAt: new Date(),
  },
  {
    reactionBody:"4",
    username:'Abed Ndir',
    createdAt: new Date(),
  },
  {
    reactionBody:"5",
    username:'Sherly Bennet',
    createdAt: new Date(),
  },
  {
    reactionBody:"6",
    username:'Britta Perry',
    createdAt: new Date(),
  },
  {
    reactionBody:"7",
    username:'Troy Barnes',
    createdAt: new Date(),
  }
];

//make funtion that adds users to friend list

//make function that add thoughts to thought list 

//make function that adds reaction to reactions list


// Export the functions for use in seed.js
module.exports = { userData,thoughtsData,reactionData };
