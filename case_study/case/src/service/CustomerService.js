import axios from "axios";

export const getCustomerList = async (page,searchName,searchType) =>{
    if(searchType===""){
        try{
            const result = await axios.get(`http://localhost:8080/api/customer?_page=${page}&name_like=${searchName}`);
            return result.data;
        }catch(e){
            console.log(e);
        }
    }else{
        try{
            const result = await axios.get(`http://localhost:8080/api/customer?_page=${page}&name_like=${searchName}&customerType.id=${searchType}`);
            return result.data;
        }catch(e){
            console.log(e);
        }
    }
}
export const createCustomer = async (customer) =>{
    try{
      await axios.post(`http://localhost:8080/api/customer/create`,customer);
    }catch(e){
        console.log(e); 
    }
}
export const deleteCustomer = async (id) =>{
    try{
        await axios.delete(`http://localhost:8080/api/customer/${id}`);
    }catch(e){
        console.log(e);
    }
}
export const getCustomerById = async (id) =>{
    const result = await axios.get(`http://localhost:8080/Customers/${id}`)
    return result.data;
}
export const editCustomer = async (customer) =>{
    try{
        await axios.put(`http://localhost:8080/Customers/${customer.id}`,customer);
    }catch(e){
        console.log(e);
    }
}