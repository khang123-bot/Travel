const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-user-api', userController.createUser);
router.post('/login',userController.loginByUserAccount)

router.get('/get-user-by-id/:idUser',userController.getUserById);
router.get('/update-checked/:idUser',userController.checkUserUpdated)
router.put('/update-user-password-api/:user_id',userController.updateUserPassword);

router.post('/create-user-desc/:userId', userController.createUserDesc)
router.put('/update-user-information-api/:user_id',userController.updateUserInfor)

router.post('/check-email-exist',userController.checkEmailExist)
router.delete('/delete-user/:user_id',userController.deleteUser)

module.exports = router;