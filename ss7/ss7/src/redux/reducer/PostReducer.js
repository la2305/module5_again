import {CREATE_POST, GET_ALL_POST } from "../Types";

const postReducer = (posts = [], action) =>{
    const {type, payload} = action;
    switch (type){
        case GET_ALL_POST: {
            return payload;
        }
        case CREATE_POST: {
            return [...posts,payload];
        }
        default: {
            return posts;
        }
    }
}
export default postReducer;
