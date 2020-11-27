//config
const queryBuilder = require('../config/database');
const uuid = require('uuid');
//class
class userService {
    static async createUserService(req) {
        try {
            let params = req.body;
            let dataInsert = {
                user_id: uuid.v4(),
                username: params.email,
                password: params.password,
                displayName: params.displayName
            }
            await queryBuilder('user').insert(dataInsert);
            return "SUCCESS";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async getAllUserService(req) {
        try {
            let data = await queryBuilder.select('user_description.user_id','user_description.firstname','user_description.lastname','displayName','username','user_description.address','user_description.phone','user_description.img','user_description.dateOfBirth','user_description.country','user_description.gender').from('user').innerJoin('user_description','user.user_id','user_description.user_id');            
            return data;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async updateUserPasswordService(req) {
        try {
            let idUser = req.params.user_id;
            let dataUpdate = { password: req.body.password };
            await queryBuilder('user').where("user_id", idUser).update(dataUpdate);
            return "SUCCESS";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async updateUserInforService(req) {
        try {
            let idUser = req.params.user_id;
            let params = req.body;
            let dataUpdate = {
                firstname: params.firstname,
                lastname: params.lastname,
                address: params.address,
                phone: params.phone,
                img: params.img,
                dateOfBirth: params.dateOfBirth,
                country: params.country,
                gender: params.gender
            };
            await queryBuilder('user_description').where("user_id", idUser).update(dataUpdate);
            return "SUCCESS";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async loginByUserAccountService(req) {
        try {
            let params = req.body;
            let email = params.email;
            let password = params.password;

            let checkEmail = await queryBuilder('user').where("username", email).first();

            let checkPass = await queryBuilder('user').where("password", password).first();
            
            if(typeof(checkEmail)==='undefined' || typeof(checkPass)==='undefined'){
                return "FAIL";
            }else{
                if(email==checkEmail.username && password==checkPass.password){
                    return "SUCCESS"} else return "FAIL";
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = userService;