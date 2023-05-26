const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addUserfriends,
  deleteUser,
  deleteUserFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends').post(addUserfriends)

router.route('/:userId/friends/:friendsId').delete(deleteUserFriend)

module.exports = router;
