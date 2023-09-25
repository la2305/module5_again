import axios from "axios";

export const getPostList = async () =>{
    const result = await axios.get(`http://localhost:8080/data`);
    return result.data;
}
export const createPost = async (post) =>{
    const result = await axios.post(`http://localhost:8080/data`,post);
}