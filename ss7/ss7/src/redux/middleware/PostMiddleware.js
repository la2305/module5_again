import * as postService from "../../service/PostService";
import { CREATE_POST,GET_ALL_POST } from "../Types";

export const getAllPost = () => async (dispatch) =>{
    const result = await postService.getPostList();
    dispatch({
        type: GET_ALL_POST,
        payload: result
    })
}

export const createPost = (value) => async (dispatch) =>{
    const result = await postService.createPost(value);

    dispatch({
        type: CREATE_POST,
        payload: value
    })
}