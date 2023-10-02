import axios  from "axios";

export const getContractList = async () =>{
    const respon = await axios.get(`http://localhost:8080/contracts`);
    return respon.data;
}
export const createContract = async (contract) =>{
    await axios.post(`http://localhost:8080/contracts`,contract);
}
export const deleteContract = async (id) =>{
    await axios.delete(`http://localhost:8080/contracts/${id}`);
}
