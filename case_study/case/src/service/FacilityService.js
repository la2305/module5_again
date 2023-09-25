import axios from "axios";

export const getFacilityList = async () =>{
        try{
            const result = await axios.get(`http://localhost:8080/facility`);
            return result.data
        }catch(e){
            console.log(e);
        }
}

export const createFacility = async (Facility) =>{
    try{
        await axios.post(`http://localhost:8080/facility`,Facility);
    }catch(e){
        console.log(e);
    }
}

export const deleteFacility = async (id) =>{
    try{
        await axios.delete(`http://localhost:8080/facility/${id}`);
    }catch(e){
        console.log(e);
    }
}

export const getFacilityById = async (id) =>{
    try{
        const result = await axios.get(`http://localhost:8080/facility/${id}`);
        return result.data;
    }catch(e){
        console.log(e);
    }
}

export const editFacility = async (facility) =>{
    try{
        await axios.put(`http://localhost:8080/facility/${facility.id}`,facility);
    }catch(e){
        console.log(e);
    }
}