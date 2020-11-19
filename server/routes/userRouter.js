const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-user-api', userController.createUser);
router.post('/login',userController.loginByUserAccount)

router.put('/update-user-password-api/:user_id',userController.updateUserPassword);
router.put('/update-user-information-api/:user_id',userController.updateUserInfor)

module.exports = router;