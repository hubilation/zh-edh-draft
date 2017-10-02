import request from "superagent";

export default class AccountApi {
    static logUserIn(username, password){
        return request
            .post("http://localhost:5000/login")
            .send({
                username: username,
                password: password
            })
            .then(()=>{
                
            })
    }
}