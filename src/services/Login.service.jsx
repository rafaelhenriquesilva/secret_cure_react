import { Component } from "react";
import axios from "axios";

const baseURL = "" || "http://localhost:3001/";

class LoginService extends Component {
    constructor(props) {
        super(props);
    }

    static async getUsers() {
        let finalUrl = `${baseURL}system_users` 
        try {
            let system_users =  await axios
                .get(finalUrl)
            return system_users
        } catch (error) {
            console.error(error)
        }
    }
}

export default LoginService;