const {Router} = require('express');
const UserController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAll);
userRouter.get('/:userId', UserController.getOne);
userRouter.delete('/:userId', UserController.deleteOne);
userRouter.put('/:userId', UserController.updateOne);

module.exports = userRouter;