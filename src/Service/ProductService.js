import axios from "./AxiosCustomize";

const getAllProduct = async () =>{
    try {
        const response = await axios.get('products')
        return response
    } catch (error) {
        console.log(error);
    }
}



export {getAllProduct};