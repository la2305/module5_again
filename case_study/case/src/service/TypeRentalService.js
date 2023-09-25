import axios from "axios";

export const getListType = async () =>{
    try{
        const result = await axios.get(`http://localhost:8080/typeRental`);
        return result.data;
    }catch(e){
        console.log(e);
    }    
}