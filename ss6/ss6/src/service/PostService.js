import axios from "axios";

export const getPostList = async () =>{
    try{
        const result = await axios.get(`http://localhost:8080/data`);
        return result.data;
    }catch(e){
        console.log(e);
    }
}
export const createPost = async (post) =>{
    try{
        await axios.post(`http://localhost:8080/data`,post);
    }catch(e){
        console.log(e);
    }
}