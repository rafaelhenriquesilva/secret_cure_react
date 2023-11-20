import { Component } from "react";
import axios from "axios";

const baseURL = "https://json-server-help-robotic-f6947d1e24a3.herokuapp.com/" || "http://localhost:3000/";

class ProductService extends Component {
    constructor(props) {
        super(props);
    }

    getProduct = async () => {
        const {complementUrl} = this.props;
        let finalUrl = baseURL + complementUrl
        try {
            let products =  await axios
                .get(finalUrl)
            return products
        } catch (error) {
            console.error(error)
        }


    };
}

export default ProductService;