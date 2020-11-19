const userService = require('../services/userService');
class userController {
    static async createUser(req, res, next) {
        try {
            let data = await userService.createUserService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async updateUserPassword(req, res, next) {
        try {
            let data = await userService.updateUserPasswordService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async updateUserInfor(req, res, next) {
        try {
            let data = await userService.updateUserInforService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async loginByUserAccount(req, res, next) {
        try {
            let data = await userService.loginByUserAccountService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
}

module.exports = userController;