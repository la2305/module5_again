import axios from "axios";

export const getListPost = async () =>{
    try{
        const result = await axios.get(`http://localhost:8080/datatPost`);
        return result.data
    } catch(e){
        console.log(e);
    }
}
export const deletePost = async (id) =>{
    try{
        await axios.delete(`http://localhost:8080/datatPost/${id}`);
    }catch(e){
        console.log(e);
    }
}
export const creatPost =async (post) =>{
    try{
        await axios.post(`http://localhost:8080/datatPost`,post);
    } catch(e){
        console.log(e);
    }
}
export const getPost = async (id) =>{
    try{
        const result = await axios.get(`http://localhost:8080/datatPost/${id}`);
        return result.data;
    }catch(e){
        console.log(e);
    }
}
export const editPost = async (post) =>{
    try{
        await axios.put(`http://localhost:8080/datatPost/${post.id}`,post);
    }catch(e){
        console.log(e);
    }
}
