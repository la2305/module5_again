import axios from "axios";
export const getCustomerType = async () =>{
    const result = await axios.get(`http://localhost:8080/api/customerType`);
    return result.data;
}