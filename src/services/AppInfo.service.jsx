import { Component } from "react";
import axios from "axios";

const baseURL = "https://mock-secret-cure-e2b23b09b8d1.herokuapp.com/" || "http://localhost:3001/";

class AppInfoService extends Component {
    constructor(props) {
        super(props);
    }

    static async getInfo() {
        let finalUrl = `${baseURL}app_info` 
        try {
            let appInfoData =  await axios
                .get(finalUrl)
            return appInfoData
        } catch (error) {
            console.error(error)
        }
    }
}

export default AppInfoService;