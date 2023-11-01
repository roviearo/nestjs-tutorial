import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return {
            msg: "Hello I'm signed up"
        }
    }
    
    signin() {
        return {
            msg: "Hello I'm signed in"
        }
    }

}
