import { Component } from "react";
import axios from "axios";

const baseURL = "" || "http://localhost:3001/";

class UserDetailService extends Component {
    constructor(props) {
        super(props);
    }

    static async getInfo() {
        let finalUrl = `${baseURL}user_detail` 
        try {
            let userDetailData =  await axios
                .get(finalUrl)
            return userDetailData
        } catch (error) {
            console.error(error)
        }
    }
}

export default UserDetailService;